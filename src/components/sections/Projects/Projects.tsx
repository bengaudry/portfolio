import { useTranslation } from "react-i18next";
import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Projects.module.scss";

type ProjectState = "active" | "development" | "inactive";

function ProjectStatePill({ state }: { state: ProjectState }) {
  const { t } = useTranslation();
  const classNames = [styles.ProjectStatePill];

  return (
    <div aria-label={state} className={classNames.join(" ")}>
      <span />
      <span>{t("common." + state)}</span>
    </div>
  );
}

function Project({
  title,
  description,
  imgSrc,
  state,
}: {
  title: string;
  description: string;
  imgSrc: string;
  state: ProjectState;
}) {
  return (
    <List className={styles.ProjectItem} title={title}>
      <article>
        <img src={imgSrc} className={styles.ProjectPicture} />
        <div>
          <p>{description}</p>
          <ProjectStatePill state={state} />
        </div>
      </article>
    </List>
  );
}

export function Projects() {
  const { t } = useTranslation();

  return (
    <section className={styles.Projects}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title={t("projects.title")} />
        <Project
          title="Split Tabs"
          state="active"
          description={t("projects.split-tabs.description")}
          imgSrc="https://addons.mozilla.org/user-media/previews/full/322/322418.png?modified=1748884796"
        />
        <Project
          title="Studyswipe"
          state="active"
          description={t("projects.studyswipe.description")}
          imgSrc="/portfolio/studyswipe-screenshot.png"
        />
        <Project
          title="Onboarder"
          state="development"
          description={t("projects.onboarder.description")}
          imgSrc="/portfolio/studyswipe-screenshot.png"
        />
      </ResponsiveWrapper>
    </section>
  );
}
