import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import en from "../locales/en.json"
import fr from "../locales/fr.json"

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "fr",
		interpolation: {
			escapeValue: false
		},
		resources: {
			fr,
			en
		}
	})

export default i18n
