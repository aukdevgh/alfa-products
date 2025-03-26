import { Link, useLocation } from "react-router";
import clsx from "clsx";
import styles from "./header.module.scss";

const routes = [
  { path: "/", value: "home" },
  { path: "/products", value: "products" },
  { path: "/create-product", value: "create product" },
];
export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav className={clsx("container", styles.nav)}>
        {routes.map((route) => (
          <Link
            className={clsx(styles.link, {
              [styles.isActive]: pathname === route.path,
            })}
            to={route.path}
            key={route.path}
          >
            {route.value}
          </Link>
        ))}
      </nav>
    </header>
  );
};
