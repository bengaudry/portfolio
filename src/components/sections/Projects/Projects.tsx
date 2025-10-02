import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <div className={styles.Projects}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title="Projets" />
      </ResponsiveWrapper>
    </div>
  );
}
