import { useTranslation } from "react-i18next";
import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Contact.module.scss";

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles.Contact}>
      <ResponsiveWrapper withMargin withBorder isLast>
        <SectionTitle title={t("contact.title")} />
        <p>Contactez moi par email :</p>
        <a href="mailto:bengaudry@outlook.fr">bengaudry@outlook.fr</a>
      </ResponsiveWrapper>
    </div>
  );
}
