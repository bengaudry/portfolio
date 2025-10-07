import { useTranslation } from "react-i18next";
import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Skills.module.scss";

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className={styles.Skills}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title={t("skills.title")} />
        <List
          title={t("skills.front-end")}
          icon="https://img.icons8.com/?size=100&id=i1DTRHrbIVcm&format=png&color=000000"
          items={[
            { title: "HTML" },
            { title: "CSS" },
            { title: "React" },
            { title: "TypeScript" },
            { title: "TailwindCSS" },
          ]}
        />
        <List
          title={t("skills.back-end")}
          icon="https://img.icons8.com/?size=100&id=Wy3XKG1CjyKf&format=png&color=000000"
          items={[
            { title: "Next.JS" },
            { title: "Prisma" },
            { title: "Firebase" },
            { title: "Supabase" },
            { title: "NodeJS" },
            { title: "Oracle SQL" },
          ]}
        />
        <List
          title={t("skills.tools")}
          icon="https://img.icons8.com/?size=100&id=8ODuhw2BOSHc&format=png&color=000000"
          items={[
            { title: "Git" },
            { title: "Figma" },
            { title: "Canva" },
            { title: "VS Code" },
            { title: "Github" },
            { title: "Notion" },
            { title: "Vercel" },
          ]}
        />
        <List
          title={t("skills.others")}
          icon="https://img.icons8.com/?size=100&id=dsj11frDp0rw&format=png&color=000000"
          items={[
            { title: "Java" },
            { title: "Python" },
            { title: "C" },
            { title: "ARM" },
            { title: "React Native" },
          ]}
        />
      </ResponsiveWrapper>
    </div>
  );
}
