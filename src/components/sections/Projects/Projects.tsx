import { useTranslation } from "react-i18next";
import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Projects.module.scss";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section className={styles.Projects}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title={t("projects.title")} />
        <List title="Split Tabs" />
        <List title="Studyswipe" />
        <List title="Sortify" />
      </ResponsiveWrapper>
    </section>
  );
}
