import type { PropsWithChildren } from "react";
import styles from "./ResponsiveWrapper.module.scss";

export type ResponsiveWrapperProps = PropsWithChildren<{
  withPadding?: boolean;
  className?: string;
}>;

export function ResponsiveWrapper({
  children,
  className,
  withPadding,
}: ResponsiveWrapperProps) {
  const classNames = [styles.ResponsiveWrapper];
  if (withPadding) classNames.push(styles.WithPadding);
  if (className) classNames.push(className);

  return <div className={classNames.join(" ")}>{children}</div>;
}
