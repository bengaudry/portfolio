import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { HeroTitle } from "../../misc"
import { ResponsiveWrapper } from "../../ui"
import { SocialMediaLink } from "../../ui/SocialMediaLink/SocialMediaLink"
import { LangSelector } from "../../misc/LangSelector/LangSelector"
import { DownloadResumeButton } from "../../misc/DownloadResumeButton/DownloadResumeButton"
import meLowResImgSrc from "../../../assets/me-low-res.webp"
import meImgSrc from "../../../assets/me.webp"
import locationIconSrc from "../../../assets/icons/icons8-location-94.png"
import styles from "./Hero.module.scss"

export function Hero() {
	const { t } = useTranslation()

	return (
		<motion.section
			initial={{ opacity: 0, y: 20, scale: 0.9 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.6 }}
			className={styles.Hero}
		>
			<ResponsiveWrapper withMargin className={styles.InnerWrapper}>
				<LangSelector />
				<img
					src={meImgSrc}
					className={styles.Picture}
					style={{
						// Loading the low res image as a background image while the high res one is loading to avoid layout shift
						backgroundImage: `url(${meLowResImgSrc})`
					}}
					alt="Picture of Ben Gaudry"
					width={480}
					height={480}
				/>
				<HeroTitle />
				<p className={styles.Location}>
					<img
						src={locationIconSrc}
						height={24}
						width={24}
						alt="Location icon"
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
	)
}
