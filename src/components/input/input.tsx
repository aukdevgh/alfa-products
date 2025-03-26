import { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const Input: FC<InputProps> = ({ className, label, ...props }) => {
  return (
    <label className={styles.wrapper}>
      <strong>{label}</strong>
      <input className={clsx(styles.input, className)} {...props} />
    </label>
  );
};
