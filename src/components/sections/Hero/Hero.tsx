import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HeroTitle } from "../../misc";
import { ResponsiveWrapper } from "../../ui";
import { SocialMediaLink } from "../../ui/SocialMediaLink/SocialMediaLink";
import { LangSelector } from "../../misc/LangSelector/LangSelector";
import meImgSrc from "../../../assets/me.jpg";
import styles from "./Hero.module.scss";
import { DownloadResumeButton } from "../../misc/DownloadResumeButton/DownloadResumeButton";

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
        <LangSelector />
        <img src={meImgSrc} className={styles.Picture} />
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
          <DownloadResumeButton />
        </div>
      </ResponsiveWrapper>
    </motion.section>
  );
}
