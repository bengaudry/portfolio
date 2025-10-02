import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <div className={styles.Skills}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title="Compétences" />
        <List title="Front-end" />
        <List title="Back-end" />
        <List title="Outils" />
        <List title="Langages" />
      </ResponsiveWrapper>
    </div>
  );
}
