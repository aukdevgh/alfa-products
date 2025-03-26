import { useState } from "react";
import { PorductCard } from "../../components/product-card/product-card";
import { PorductCardSkeleton } from "../../components/product-card/product-card.skeleton";
import { getProducts, getProductsStatus } from "../../store/products/selectors";

import styles from "./products.module.scss";

export const Products = () => {
  const products = getProducts();
  const status = getProductsStatus();
  const [filter, setFilter] = useState("All");

  if (status === "failed") return <p>Failed to load products.</p>;

  const filteredProducts =
    filter === "All" ? products : products.filter((product) => product.liked);

  return (
    <>
      <select
        className={styles.filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Liked">Liked</option>
      </select>

      <ul className={styles.list}>
        {status === "loading"
          ? [1, 2, 3, 4, 5, 6].map((product) => (
              <li key={product}>
                <PorductCardSkeleton />
              </li>
            ))
          : filteredProducts.map((product) => (
              <li key={product.id}>
                <PorductCard key={product.id} product={product} />
              </li>
            ))}
      </ul>
    </>
  );
};
