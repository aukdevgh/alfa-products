import { Skeleton } from "../skeleton/skeleton";
import styles from "./product-card.module.scss";

export const PorductCardSkeleton = () => {
  return (
    <div
      className={styles.link}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Skeleton className={styles.img} width={"100%"} height={200} />
      <Skeleton className={styles.title} height={24} width={240} />
      <Skeleton className={styles.description} height={16} width={260} />
      <Skeleton className={styles.description} height={16} width={260} />
      <Skeleton className={styles.description} height={16} width={260} />
    </div>
  );
};
