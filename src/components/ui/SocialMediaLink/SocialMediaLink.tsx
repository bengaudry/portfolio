import { PERSONNAL_EMAIL } from "../../../lib/constants";
import styles from "./SocialMediaLink.module.scss";

export type SocialMediaLinkProps = {
  name: "linkedin" | "github" | "mail";
};

export function SocialMediaLink({ name }: SocialMediaLinkProps) {
  let iconSrc: string = "";
  let link: string = "";

  if ("linkedin" === name) {
    link = "https://www.linkedin.com/in/ben-gaudry-4702932a5/";
    iconSrc = "https://img.icons8.com/?size=36&id=8808&format=png&color=ffffff";
  }

  if ("github" === name) {
    link = "https://github.com/bengaudry";
    iconSrc =
      "https://img.icons8.com/?size=36&id=62856&format=png&color=ffffff";
  }

  if ("mail" === name) {
    link = `mailto:${PERSONNAL_EMAIL}`;
    iconSrc =
      "https://img.icons8.com/?size=36&id=YRRhCXfA0Vd0&format=png&color=ffffff";
  }

  return (
    <a
      className={styles.SocialMediaLink}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img height={36} width={36} src={iconSrc} />
    </a>
  );
}
