import { changeLanguage } from "i18next"
import styles from "./LangSelector.module.scss"
import { useTranslation } from "react-i18next"

export function LangSelector() {
	const { i18n } = useTranslation()
	const currentLang = i18n.language || "fr"

	const handleChangeLanguage = (lang: string) => {
		changeLanguage(lang)

		// Remove /[lang] prefix from URL without refreshing
		const currentPath = window.location.pathname
		const langPattern = /^\/[a-z]{2}(\/|$)/i
		const newLangPath = "/" + lang
		const newPath = langPattern.test(currentPath)
			? currentPath.replace(langPattern, newLangPath)
			: newLangPath
		window.history.replaceState(
			null,
			"",
			newPath + window.location.search + window.location.hash
		)
	}

	return (
		<div
			className={styles.LangSelector}
			role="navigation"
			aria-label="Language selector"
		>
			<button
				onClick={() => handleChangeLanguage("en")}
				className={[
					styles.button,
					currentLang === "en" ? styles.active : ""
				].join(" ")}
			>
				EN
			</button>
			<span className={styles.separator}>/</span>
			<button
				onClick={() => handleChangeLanguage("fr")}
				className={[
					styles.button,
					currentLang === "fr" ? styles.active : ""
				].join(" ")}
			>
				FR
			</button>
		</div>
	)
}
