import { useEffect, useState } from "react";
import styles from "./HeroTitle.module.scss";

export function HeroTitle() {
  const [isTickVisible, setIsTickVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTickVisible((v) => !v);
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className={styles.HeroTitle}>
      <span>Ben Gaudry</span>
      {isTickVisible && <span>_</span>}
    </h1>
  );
}
