import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <div className={styles.Skills}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title="Compétences" />
      </ResponsiveWrapper>
    </div>
  );
}
