import { useTranslation } from "react-i18next";
import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Contact.module.scss";

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles.Contact}>
      <ResponsiveWrapper withMargin withBorder isLast>
        <SectionTitle title={t("contact.title")} />
      </ResponsiveWrapper>
    </div>
  );
}
