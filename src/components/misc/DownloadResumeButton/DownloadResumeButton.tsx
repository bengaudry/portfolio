import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import downloadIconSrc from "../../../assets/icons/icons8-download-64.png"
import styles from "./DownloadResumeButton.module.scss";

const RESUMES: Record<string, { name: string; url: string }> = {
	en: {
		name: "resume-ben-gaudry.pdf",
		url: "/en-resume-bengaudry.pdf",
	},
	fr: {
		name: "cv-ben-gaudry.pdf",
		url: "/fr-cv-bengaudry.pdf",
	},
};

export function DownloadResumeButton() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language.split("-")[0];

	return (
		<NavLink
			target="_blank"
			to={RESUMES[lang].url}
			className={styles.button}
			download={RESUMES[lang].name}
		>
			<span>{t("common.download-resume")}</span>
			<img
				src={downloadIconSrc}
				alt="Download icon"
				height={28}
				width={28}
			/>
		</NavLink>
	);
}
