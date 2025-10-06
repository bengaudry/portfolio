import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Contact.module.scss";

export function Contact() {
  return (
    <div className={styles.Contact}>
      <ResponsiveWrapper withMargin withBorder isLast>
        <SectionTitle title="Contact" />
      </ResponsiveWrapper>
    </div>
  );
}
