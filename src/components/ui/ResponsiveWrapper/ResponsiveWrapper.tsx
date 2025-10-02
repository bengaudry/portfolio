import type { PropsWithChildren } from "react";
import styles from "./ResponsiveWrapper.module.scss";

export type ResponsiveWrapperProps = PropsWithChildren;

export function ResponsiveWrapper({ children }: ResponsiveWrapperProps) {
  return <div className={styles.ResponsiveWrapper}>{children}</div>;
}
