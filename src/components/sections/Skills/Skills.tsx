import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <div className={styles.Skills}>
      <ResponsiveWrapper withMargin withBorder>
        <SectionTitle title="Compétences" />
        <List
          title="Front-end"
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
          title="Back-end"
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
          title="Outils"
          icon="https://img.icons8.com/?size=100&id=8ODuhw2BOSHc&format=png&color=000000"
          items={[
            { title: "Figma" },
            { title: "Canva" },
            { title: "VS Code" },
            { title: "Github" },
            { title: "Notion" },
          ]}
        />
        <List
          title="Autres"
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
