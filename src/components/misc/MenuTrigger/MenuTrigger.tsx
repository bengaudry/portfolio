import type { Dispatch, SetStateAction } from "react";
import styles from "./MenuTrigger.module.scss";

export function MenuTrigger({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className={styles.MenuTrigger}
      onClick={() => setIsMenuOpen((v) => !v)}
    >
      {isMenuOpen ? "CLOSE" : "MENU"}
    </button>
  );
}
