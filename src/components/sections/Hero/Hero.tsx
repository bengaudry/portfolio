import { HeroTitle } from "../../misc";
import { ResponsiveWrapper } from "../../ui";
import { SocialMediaLink } from "../../ui/SocialMediaLink/SocialMediaLink";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.Hero}>
      <ResponsiveWrapper withMargin className={styles.InnerWrapper}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoKyKfvQdoELlHQd4QZoIIIRiAJ3S2gj4yg&s"
          className={styles.Picture}
        />
        <HeroTitle />
        <p className={styles.Subtitle}>
          Étudiant en informatique dans l'école d'ingénieurs Polytech Lyon, je
          suis spécialisé dans le développement web, et notamment le front-end
        </p>
        <div className={styles.SocialMediaLinksWrapper}>
          <SocialMediaLink name="linkedin" />
          <SocialMediaLink name="github" />
          <SocialMediaLink name="mail" />
        </div>
      </ResponsiveWrapper>
    </section>
  );
}
