import { useTranslation } from "react-i18next"
import { List, ResponsiveWrapper, SectionTitle } from "../../ui"
import styles from "./Skills.module.scss"
import { SKILLS } from "./list.ts"

export default function Skills() {
	const { t } = useTranslation()

	return (
		<section className={styles.Skills}>
			<ResponsiveWrapper withMargin withBorder>
				<SectionTitle title={t("skills.title")} />
				{Object.keys(SKILLS).map((skillName) => (
					<List
						key={skillName}
						title={t("skills." + skillName)}
						iconUrl={SKILLS[skillName].iconUrl}
						items={SKILLS[skillName].items}
					/>
				))}
			</ResponsiveWrapper>
		</section>
	)
}
