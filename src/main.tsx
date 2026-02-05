import "@flaticon/flaticon-uicons/css/brands/all.css";
import "@flaticon/flaticon-uicons/css/solid/rounded.css";
import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import { AppRoutes } from "./router/AppRoutes.tsx";

i18n.use(initReactI18next).init({
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		fr: { translation: fr },
		en: { translation: en },
	},
});

if (window.location.pathname.endsWith("/en")) {
	i18n.changeLanguage("en");
}

if (window.location.pathname.endsWith("/fr")) {
	i18n.changeLanguage("fr");
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</StrictMode>,
);
