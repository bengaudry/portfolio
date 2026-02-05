import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import styles from "./DownloadResumeButton.module.scss";

export function DownloadResumeButton() {
    const { t } = useTranslation();

    return <NavLink to="resume" className={styles.button}>{t("common.download-resume")}</NavLink>;
}
