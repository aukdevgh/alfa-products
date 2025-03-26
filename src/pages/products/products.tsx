import { Link } from "react-router";
import { PorductCard } from "../../components/product-card/product-card";
import { getProducts, getProductsStatus } from "../../store/products/selectors";
import styles from "./products.module.scss";

export const Products = () => {
  const products = getProducts();
  const status = getProductsStatus();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load products.</p>;

  return (
    <>
      <h1>products</h1>

      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id}>
            <PorductCard key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};
