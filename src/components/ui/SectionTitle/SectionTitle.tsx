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
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
