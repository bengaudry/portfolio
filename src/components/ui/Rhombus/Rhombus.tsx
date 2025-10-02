import styles from "./Rhombus.module.scss";

export type RhombusProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Rhombus(props: RhombusProps) {
  const classNames: string[] = [styles.Rhombus];
  const { className, ...otherProps } = props;
  if (className) classNames.push(className);

  return <div className={classNames.join(" ")} {...otherProps} />;
}
