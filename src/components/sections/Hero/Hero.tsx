import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HeroTitle } from "../../misc";
import { ResponsiveWrapper } from "../../ui";
import { SocialMediaLink } from "../../ui/SocialMediaLink/SocialMediaLink";
import styles from "./Hero.module.scss";

export function Hero() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: .9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={styles.Hero}
    >
      <ResponsiveWrapper withMargin className={styles.InnerWrapper}>
        <img src="/me.jpg" className={styles.Picture} />
        <HeroTitle />
        <p className={styles.Location}>
          <img
            src="https://img.icons8.com/?size=100&id=3nOZtpH7KQrP&format=png&color=000000"
            height={24}
          />
          <u>Lyon, France</u>
        </p>
        <p>{t("hero.presentation")}</p>
        <div className={styles.SocialMediaLinksWrapper}>
          <SocialMediaLink name="linkedin" />
          <SocialMediaLink name="github" />
          <SocialMediaLink name="mail" />
        </div>
      </ResponsiveWrapper>
    </motion.section>
  );
}
