import { useParams } from "react-router";
import { getProductById } from "../../store/products/selectors";
import Star from "../../assets/icons/star.svg";
import styles from "./product.module.scss";

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));

  if (!product) {
    return <h1>product not fount</h1>;
  }

  return (
    <div className={styles.product}>
      <img
        className={styles.img}
        src={product.thumbnail}
        alt={product.title}
        width={600}
        height={600}
      />
      <div className={styles.info}>
        <h1>{product.title}</h1>
        <div className={styles.field}>
          <strong>BRAND: </strong>
          {product.brand}
        </div>
        <div className={styles.rating}>
          <Star />
          {product.rating}
        </div>
        <p>{product.description}</p>
        <div className={styles.price}>
          {product.price}$
          <span className={styles.discount}>
            -{product.discountPercentage}%
          </span>
        </div>
        <div className={styles.category}>{product.category}</div>
        <div className={styles.field}>
          <strong>TAGS: </strong>
          {product.tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.field}>
          <strong>SKU: </strong>
          {product.sku}
        </div>
      </div>
    </div>
  );
};
