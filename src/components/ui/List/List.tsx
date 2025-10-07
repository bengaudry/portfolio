import type { PropsWithChildren } from "react";
import styles from "./List.module.scss";

export type ListItemT = {
  title: string;
  iconUrl?: string;
};

export type ListProps = PropsWithChildren<{
  title: string;
  iconUrl?: string;
  items?: Array<ListItemT>;
}>;

function ListItem({ title, iconUrl }: ListItemT) {
  return (
    <div className={styles.ListItem}>
      {iconUrl && <img src={iconUrl} height={16} />}
      <p>{title}</p>
    </div>
  );
}

function ListItemsContainer({ children }: PropsWithChildren) {
  return <div className={styles.ListItemsContainer}>{children}</div>;
}

export function List({ title, iconUrl, children, items }: ListProps) {
  const Children = () => {
    if (!items) return children;
    return <ListItemsContainer>{items.map(ListItem)}</ListItemsContainer>;
  };

  return (
    <div className={styles.List}>
      <div className={styles.RoundedSquare} />
      <div className={styles.TitleContainer}>
        {iconUrl && <img height={32} src={iconUrl} />}
        <span className={styles.Title}>{title}</span>
      </div>
      <Children />
    </div>
  );
}
