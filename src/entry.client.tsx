import "@flaticon/flaticon-uicons/css/brands/all.css"
import "@flaticon/flaticon-uicons/css/solid/rounded.css"
import i18n from "i18next"
import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import { initReactI18next } from "react-i18next"
import { HydratedRouter } from "react-router/dom"

i18n.use(initReactI18next).init({
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false
	},
	backend: {
		loadPath: "/locales/{{lng}}.json"
	}
})

if (window.location.pathname.endsWith("/en")) {
	i18n.changeLanguage("en")
}

if (window.location.pathname.endsWith("/fr")) {
	i18n.changeLanguage("fr")
}

hydrateRoot(
	document,
	<StrictMode>
		<HydratedRouter />
	</StrictMode>
)
