import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
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
				src="https://img.icons8.com/?size=28&id=CcyOKBYi20tH&format=png&color=000000"
				alt="Download icon"
				height={28}
				width={28}
			/>
		</NavLink>
	);
}
