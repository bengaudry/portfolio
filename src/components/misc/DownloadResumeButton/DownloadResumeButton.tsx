import { useTranslation } from "react-i18next"
import downloadIconSrc from "../../../assets/icons/icons8-download-64.png"
import styles from "./DownloadResumeButton.module.scss"
import { ButtonLink } from "../Button/Button"
import { RESUMES } from "../../../lib/constants"

export function DownloadResumeButton() {
	const { t, i18n } = useTranslation()
	const lang = i18n?.language?.split("-")?.[0]

	return (
		<ButtonLink
			target="_blank"
			to={RESUMES[lang]?.url}
			className={styles.button}
			download={RESUMES[lang]?.name}
			label={t("common.download-resume")}
			rightIcon={{
				src: downloadIconSrc,
				alt: "Download icon",
				height: 28,
				width: 28
			}}
		/>
	)
}
