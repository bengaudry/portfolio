import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rhombus } from "../Rhombus/Rhombus";
import styles from "./SectionTitle.module.scss";

export type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} className={styles.SectionTitle}>
      <Rhombus className={styles.Rhombus} isInView={isInView} />
      <h2>{title}</h2>
    </motion.div>
  );
}
