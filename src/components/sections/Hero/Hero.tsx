import { useTranslation } from "react-i18next";
import { HeroTitle } from "../../misc";
import { ResponsiveWrapper } from "../../ui";
import { SocialMediaLink } from "../../ui/SocialMediaLink/SocialMediaLink";
import styles from "./Hero.module.scss";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.Hero}>
      <ResponsiveWrapper withMargin className={styles.InnerWrapper}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoKyKfvQdoELlHQd4QZoIIIRiAJ3S2gj4yg&s"
          className={styles.Picture}
        />
        <HeroTitle />
        <p className={styles.Location}>
          <img
            src="https://img.icons8.com/?size=100&id=3nOZtpH7KQrP&format=png&color=000000"
            height={24}
          />
          <u>Lyon, France</u>
        </p>
        <p className={styles.Subtitle}>{t("hero.presentation")}</p>
        <div className={styles.SocialMediaLinksWrapper}>
          <SocialMediaLink name="linkedin" />
          <SocialMediaLink name="github" />
          <SocialMediaLink name="mail" />
        </div>
      </ResponsiveWrapper>
    </section>
  );
}
