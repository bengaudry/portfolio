import styles from "./SocialMediaLink.module.scss";

export type SocialMediaLinkProps = {
  name: "linkedin" | "github" | "mail";
};

export function SocialMediaLink({ name }: SocialMediaLinkProps) {
  let className: string = "";
  let link: string = "";

  if ("linkedin" === name) {
    link = "https://www.linkedin.com/in/ben-gaudry-4702932a5/";
    className = "fi fi-brands-linkedin";
  }

  if ("github" === name) {
    link = "https://github.com/bengaudry";
    className = "fi fi-brands-github";
  }

  if ("mail" === name) {
    link = "mailto:bengaudry@outlook.com";
    className = "fi fi-sr-envelope";
  }

  return (
    <a className={styles.SocialMediaLink} href={link} target="_blank">
      <i className={className} />
    </a>
  );
}
