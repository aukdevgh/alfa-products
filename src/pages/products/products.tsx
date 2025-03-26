import { PorductCard } from "../../components/product-card/product-card";
import { PorductCardSkeleton } from "../../components/product-card/product-card.skeleton";
import { getProducts, getProductsStatus } from "../../store/products/selectors";

import styles from "./products.module.scss";

export const Products = () => {
  const products = getProducts();
  const status = getProductsStatus();

  if (status === "failed") return <p>Failed to load products.</p>;

  return (
    <>
      <ul className={styles.list}>
        {status === "loading"
          ? [1, 2, 3, 4, 5, 6].map((product) => (
              <li key={product}>
                <PorductCardSkeleton />
              </li>
            ))
          : products.map((product) => (
              <li key={product.id}>
                <PorductCard key={product.id} product={product} />
              </li>
            ))}
      </ul>
    </>
  );
};
