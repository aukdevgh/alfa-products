import { type Product } from "../../types/product";
import Like from "../../assets/icons/like.svg";
import Delete from "../../assets/icons/delete.svg";
import styles from "./product-card.module.scss";
import clsx from "clsx";
import { Link } from "react-router";
import { useAppDispatch } from "../../store/store";
import { deleteProduct, toggleLike } from "../../store/products/products-slice";

export const PorductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  const handelLiked = () => {
    dispatch(toggleLike(product.id));
  };
  const handeldelete = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className={styles.card}>
      <button
        className={clsx(styles.btn, styles.like, {
          [styles.isLiked]: product.liked,
        })}
        onClick={handelLiked}
      >
        <Like />
      </button>
      <button
        className={clsx(styles.btn, styles.delete)}
        onClick={handeldelete}
      >
        <Delete />
      </button>
      <Link className={styles.link} to={`${product.id}`}>
        <img
          className={styles.img}
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
      </Link>
    </div>
  );
};
