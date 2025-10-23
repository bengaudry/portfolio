import { useTranslation } from "react-i18next";
import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Contact.module.scss";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section className={styles.Contact}>
      <ResponsiveWrapper withMargin withBorder isLast>
        <SectionTitle title={t("contact.title")} />
        <p>{t("contact.contactMe")}</p>
        <a href="mailto:bengaudry@outlook.com">bengaudry@outlook.com</a>
      </ResponsiveWrapper>
    </section>
  );
}
