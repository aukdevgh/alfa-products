import { Link } from "react-router";
import clsx from "clsx";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={clsx("container", styles.nav)}>
        <Link className={styles.link} to={"/"}>
          home
        </Link>
        <Link className={styles.link} to={"/products"}>
          products
        </Link>
      </nav>
    </header>
  );
};
