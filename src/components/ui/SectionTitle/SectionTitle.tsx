import { Rhombus } from "../Rhombus/Rhombus";
import styles from "./SectionTitle.module.scss";

export type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className={styles.SectionTitle}>
      <Rhombus className={styles.Rhombus} />
      <h2>{title}</h2>
    </div>
  );
}
