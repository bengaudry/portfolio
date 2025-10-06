import type { PropsWithChildren } from "react";
import styles from "./List.module.scss";

export type ListItemT = {
  title: string;
};

function ListItem({ title }: ListItemT) {
  return (
    <div className={styles.ListItem}>
      <p>{title}</p>
    </div>
  );
}

function ListItemsContainer({ children }: PropsWithChildren) {
  return <div className={styles.ListItemsContainer}>{children}</div>;
}

export type ListProps = PropsWithChildren<{
  title: string;
  icon?: string;
  items?: Array<ListItemT>;
}>;

export function List({ title, icon, children, items }: ListProps) {
  const Children = () => {
    if (!items) return children;
    return <ListItemsContainer>{items.map(ListItem)}</ListItemsContainer>;
  };

  return (
    <div className={styles.List}>
      <div className={styles.RoundedSquare} />
      <div className={styles.TitleContainer}>
        {icon && <img height={32} src={icon} />}
        <span className={styles.Title}>{title}</span>
      </div>
      <Children />
    </div>
  );
}
