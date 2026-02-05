import { changeLanguage } from "i18next";

const AVAILABLE_LANGUAGES = ["fr", "en"];

type Language = "fr" | "en";
/* const FALLBACK_LANGUAGE: Language = "en";
 */
export function useLanguage() {
    const setLanguage = (newLanguage: Language) => {
        if (AVAILABLE_LANGUAGES.includes(newLanguage)) {
            changeLanguage(newLanguage);
        } else {
            console.warn(`Language ${newLanguage} is not supported. Available languages: ${AVAILABLE_LANGUAGES.join(", ")}`);
        }
    };

    return { setLanguage };
}
