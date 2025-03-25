import { type Product } from "../../types/product";
import styles from "./product-card.module.scss";

export const PorductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
};
