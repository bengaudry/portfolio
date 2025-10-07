import type { PropsWithChildren } from "react";
import styles from "./Menu.module.scss";

export type MenuProps = PropsWithChildren;

export function Menu({ children }: MenuProps) {
	return (
		<div className={styles.Menu}>
			{children}
		</div>
	);
}
