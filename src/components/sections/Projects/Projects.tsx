import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <section className={styles.Projects}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title="Projets" />
        <List title="Studyswipe" />
        <List title="Sortify" />
      </ResponsiveWrapper>
    </section>
  );
}
