import { ResponsiveWrapper } from "../../ui";
import styles from "./About.module.scss";

export function About() {
  return (
    <div className={styles.About}>
      <ResponsiveWrapper withMargin withBorder>
        <h2>A propos</h2>
      </ResponsiveWrapper>
    </div>
  );
}
