import { useTranslation } from "react-i18next";
import { List, ResponsiveWrapper, SectionTitle } from "../../ui";
import styles from "./Education.module.scss";

function EducationItem({
	location,
	startYear,
	endYear,
	description,
}: {
	location: string;
	startYear: number;
	endYear?: number;
	description?: string;
}) {
	return (
		<div>
			<span>
				{location}&nbsp;&middot;&nbsp;{startYear}
				{endYear && "-" + endYear}
			</span>
			<p>{description}</p>
		</div>
	);
}

export function Education() {
	const { t } = useTranslation();

	return (
		<section className={styles.Education}>
			<ResponsiveWrapper withBorder>
				<SectionTitle title={t("education.title")} />
				<List
					title="Lycée Honoré d'Urfé"
					iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5QdfYckL1V-5wGYoR84oCtw9Y37yq0Bu0w&s"
				>
					<EducationItem
						location="Saint-Etienne"
						startYear={2020}
						endYear={2023}
						description="Baccalauréat général spécialités Mathématiques, Physique-Chimie et Anglais monde contemporain, mention Bien."
					/>
				</List>
				<List
					title="Université Grenoble Alpes"
					linksTo="https://www.univ-grenoble-alpes.fr/"
					iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXxUySnD6gMiW5fa-7QML3b_2loN0ajH09A&s"
				>
					<EducationItem
						location="Grenoble"
						startYear={2023}
						endYear={2025}
						description="Prépa intégrée de Polytech Grenoble à l'UGA en spécialisation informatique et mathématiques"
					/>
				</List>
				<List
					title="Polytech Lyon"
					linksTo="https://polytech.univ-lyon1.fr/"
					iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRODzZ0NqirXYQ9V-cR5P59JFGT5FoMUi0g&s"
				>
					<EducationItem
						location="Villeurbanne"
						startYear={2025}
						description="Diplôme d'ingénieur spécialité informatique."
					/>
				</List>
			</ResponsiveWrapper>
		</section>
	);
}
