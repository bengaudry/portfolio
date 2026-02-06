import { ResponsiveWrapper } from "../../ui";
import styles from "./Footer.module.scss";

export function Footer() {
	return (
		<footer className={styles.Footer}>
			<ResponsiveWrapper withMargin>
				<div className="content-center">
					<p>© Ben Gaudry - {new Date().getFullYear()}</p>
					<p>
						Icons by{" "}
						<a target="_blank" href="https://icons8.com">
							Icons8
						</a>
					</p>
				</div>
			</ResponsiveWrapper>
		</footer>
	);
}
