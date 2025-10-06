import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./About.module.scss";

export function About() {
  return (
    <div className={styles.About}>
      <ResponsiveWrapper withMargin withBorder isFirst>
        <SectionTitle title="À propos" />
      </ResponsiveWrapper>
    </div>
  );
}
