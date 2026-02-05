import { motion, useInView } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";
import styles from "./List.module.scss";

export type ListItemT = {
  title: string;
  iconUrl?: string;
};

export type ListProps = PropsWithChildren<{
  title: string;
  iconUrl?: string;
  items?: Array<ListItemT>;
  className?: string;
  linksTo?: string;
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

export function List({
  title,
  iconUrl,
  children,
  items,
  linksTo,
  className,
}: ListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const classNames = [styles.List];
  if (className) classNames.push(className);

  const Children = () => {
    if (!items) return children;
    return <ListItemsContainer>{items.map(ListItem)}</ListItemsContainer>;
  };

  return (
    <motion.div
      ref={ref}
      className={classNames.join(" ")}
      initial={{ opacity: 0, scaleX: 0.9 }}
      animate={isInView ? { opacity: 1, scaleX: 1, originX: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.RoundedSquare} />
      <div className={styles.TitleContainer}>
        {iconUrl && <img height={32} src={iconUrl} />}
        {linksTo ? (
          <a
            href={linksTo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Title}
          >
            {title}
          </a>
        ) : (
          <span className={styles.Title}>{title}</span>
        )}
      </div>
      <Children />
    </motion.div>
  );
}
