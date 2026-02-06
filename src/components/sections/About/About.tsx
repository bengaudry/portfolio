import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { ResponsiveWrapper, SectionTitle } from "../../ui"
import styles from "./About.module.scss"

export function About() {
	const { t } = useTranslation()

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-50px" })

	return (
		<section ref={ref} className={styles.About}>
			<ResponsiveWrapper withBorder isFirst style={{ paddingBottom: 0 }}>
				<SectionTitle title={t("about.title")} />
				{t("about.content")
					.split("\n")
					.map((content, idx) => (
						<motion.p
							key={content}
							initial={{ opacity: 0, x: -20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.3 * idx }}
							style={{
								display: "flex",
								gap: "1rem",
								marginTop: 12
							}}
						>
							<span>{"$"}</span>
							<span>{content}</span>
						</motion.p>
					))}
			</ResponsiveWrapper>
		</section>
	)
}
