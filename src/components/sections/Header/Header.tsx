import { ResponsiveWrapper } from "../../ui";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <section className={styles.Header}>
      <ResponsiveWrapper>
        <h1>Ben Gaudry</h1>
      </ResponsiveWrapper>
    </section>
  );
}
