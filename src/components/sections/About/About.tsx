import { useTranslation } from "react-i18next";
import { ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./About.module.scss";

export function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.About}>
      <ResponsiveWrapper withMargin withBorder isFirst>
        <SectionTitle title={t("about.title")} />
      </ResponsiveWrapper>
    </section>
  );
}
