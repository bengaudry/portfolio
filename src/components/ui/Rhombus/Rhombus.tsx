import { motion } from "framer-motion";
import styles from "./Rhombus.module.scss";

export type RhombusProps = { isInView?: boolean; className?: string };

export function Rhombus(props: RhombusProps) {
	const classNames: string[] = [styles.Rhombus];
	const { className, ...otherProps } = props;
	if (className) classNames.push(className);

	return (
		<motion.div
			className={classNames.join(" ")}
			{...otherProps}
			initial={{ opacity: 0, transform: "scale(0.8) rotate(-45deg)" }}
			animate={
				props.isInView
					? { opacity: 1, transform: "scale(1) rotate(0)" }
					: {}
			}
			transition={{ duration: 0.6, ease: "easeInOut" }}
		/>
	);
}
