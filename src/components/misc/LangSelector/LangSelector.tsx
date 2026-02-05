import { changeLanguage } from "i18next";
import styles from "./LangSelector.module.scss";

export function LangSelector() {
    const handleChangeLanguage = (lang: string) => {
        changeLanguage(lang);
        
        // Remove /[lang] prefix from URL without refreshing
        const currentPath = window.location.pathname;
        const langPattern = /^\/[a-z]{2}(\/|$)/i;
        if (langPattern.test(currentPath)) {
            const newLangPath = "/" + lang;
            const newPath = currentPath.replace(langPattern, newLangPath) || newLangPath;
            window.history.replaceState(null, '', newPath + window.location.search + window.location.hash);
        }
    }

  return (
    <div className={styles.LangSelector}>
      <button onClick={() => handleChangeLanguage("en")} className={styles.button}>EN</button>
      <span className={styles.separator}>/</span>
      <button onClick={() => handleChangeLanguage("fr")} className={styles.button}>FR</button>
    </div>
  );
}
