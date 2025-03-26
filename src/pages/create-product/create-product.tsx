import clsx from "clsx";
import { FormEvent, useState } from "react";
import { Input } from "../../components/input/input";
import { useAppDispatch } from "../../store/store";
import { generateSKU } from "../../utils/sku-generator";
import { addProduct } from "../../store/products/products-slice";
import { Product } from "../../types/product";
import { useNavigate } from "react-router";
import styles from "./create-product.module.scss";

export const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now(),
      title,
      description,
      price,
      discountPercentage,
      rating: 0,
      thumbnail: image,
      category,
      tags: tags.split(","),
      brand,
      sku: generateSKU(title),
      liked: false,
    };

    dispatch(addProduct(newProduct));
    navigate("/products");
  };

  return (
    <form className={styles.form} onSubmit={handleCreate}>
      <Input
        label="Title"
        type="text"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="Brand"
        type="text"
        required
        onChange={(e) => setBrand(e.target.value)}
      />
      <Input
        label="Price"
        type="number"
        required
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Input
        label="Discount Percentage"
        type="number"
        onChange={(e) => setDiscountPercentage(Number(e.target.value))}
      />

      <label htmlFor="description">
        <strong>Description</strong>
      </label>
      <textarea
        className={clsx(styles.input, styles.textarea)}
        id="description"
        required
        onChange={(e) => setDescription(e.target.value)}
      />

      <Input
        label="Category"
        type="text"
        required
        onChange={(e) => setCategory(e.target.value)}
      />
      <Input
        label="Tags"
        type="text"
        placeholder="tag1, tag2, ..."
        required
        onChange={(e) => setTags(e.target.value)}
      />
      <Input
        label="Image"
        type="text"
        placeholder="https://example.io/MainBefore.jpg"
        required
        onChange={(e) => setImage(e.target.value)}
      />

      <button className={styles.submit} type="submit">
        create
      </button>
    </form>
  );
};
