import { HTMLAttributes, CSSProperties } from "react";
import clsx from "clsx";
import styles from "./skeleton.module.scss";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  height?: string | number;
  width?: string | number;
}

export const Skeleton = (props: SkeletonProps) => {
  const { className = "", height, width, ...otherProps } = props;

  const style: CSSProperties = {
    width,
    height,
  };

  return (
    <div
      className={clsx(styles.skeleton, className)}
      style={style}
      {...otherProps}
    />
  );
};
