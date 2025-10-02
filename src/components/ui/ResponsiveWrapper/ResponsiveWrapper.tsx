import type { PropsWithChildren } from "react";
import styles from "./ResponsiveWrapper.module.scss";

export type ResponsiveWrapperProps = PropsWithChildren<{
  withMargin?: boolean;
  withBorder?: boolean;
  className?: string;
}>;

export function ResponsiveWrapper({
  children,
  className,
  withBorder,
  withMargin,
}: ResponsiveWrapperProps) {
  const classNames = [styles.ResponsiveWrapper];
  if (withMargin) classNames.push(styles.WithMargin);
  if (withBorder) classNames.push(styles.WithBorder);
  if (className) classNames.push(className);

  return <div className={classNames.join(" ")}>{children}</div>;
}
