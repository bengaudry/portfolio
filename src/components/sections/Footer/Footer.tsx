import { ResponsiveWrapper } from "../../ui";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <ResponsiveWrapper withMargin>
        <div className="content-center">
          <p>© Ben Gaudry - {new Date().getFullYear()}</p>
        </div>
      </ResponsiveWrapper>
    </footer>
  );
}
