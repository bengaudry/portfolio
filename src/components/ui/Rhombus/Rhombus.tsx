import { motion } from "framer-motion";
import styles from "./Rhombus.module.scss";

export type RhombusProps = { isInView?: boolean, className?: string };

export function Rhombus(props: RhombusProps) {
  const classNames: string[] = [styles.Rhombus];
  const { className, ...otherProps } = props;
  if (className) classNames.push(className);

  return (
    <motion.div
      className={classNames.join(" ")}
      {...otherProps}
      initial={{ transform: "rotate(90deg)" }}
      animate={props.isInView ? { transform: "rotate(0)" } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  );
}
