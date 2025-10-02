import type { PropsWithChildren } from "react";
import styles from "./List.module.scss";

export type ListProps = PropsWithChildren<{ title: string }>;

export function List({ title, children }: ListProps) {
  return (
    <div className={styles.List}>
      <div className={styles.RoundedSquare} />
      <span className={styles.Title}>{title}</span>
      {children}
    </div>
  );
}
