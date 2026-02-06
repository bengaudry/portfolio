import { useTranslation } from "react-i18next"
import { List, ResponsiveWrapper, SectionTitle } from "../../ui"
import splitTabsIconSrc from "../../../assets/split-tabs-icon.png"
import studyswipeIllustrationSrc from "../../../assets/studyswipe-screenshot.png"
import studyswipeIconSrc from "../../../assets/studyswipe-icon.png"
import styles from "./Projects.module.scss"

type ProjectState = "active" | "development" | "inactive"

function ProjectStatePill({ state }: { state: ProjectState }) {
	const { t } = useTranslation()
	const classNames = [styles.ProjectStatePill]

	return (
		<div aria-label={state} className={classNames.join(" ")}>
			<span />
			<span>{t("common." + state)}</span>
		</div>
	)
}

export function Project({
	title,
	description,
	imgSrc,
	iconSrc,
	state,
	link,
	repoUrl
}: {
	title: string
	description: string
	imgSrc: string
	iconSrc?: string
	state: ProjectState
	link?: string
	repoUrl?: string
}) {
	return (
		<List className={styles.ProjectItem} title={title} iconUrl={iconSrc}>
			<article>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img
						src={imgSrc}
						className={styles.ProjectPicture}
						loading="lazy"
						width={350}
						height={(350 * 9) / 16}
						alt={`${title} screenshot`}
					/>
				</a>

				<div>
					<p>{description}</p>
					<div className={styles.ProjectLinks}>
						<ProjectStatePill state={state} />
						{repoUrl && (
							<a
								href={repoUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									height={24}
									width={24}
									alt="Github repository"
									src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
								/>
							</a>
						)}
					</div>
				</div>
			</article>
		</List>
	)
}

export default function Projects() {
	const { t } = useTranslation()

	return (
		<section className={styles.Projects}>
			<ResponsiveWrapper withMargin withBorder>
				<SectionTitle title={t("projects.title")} />
				<Project
					title="Split Tabs"
					state="active"
					description={t("projects.split-tabs.description")}
					imgSrc="https://addons.mozilla.org/user-media/previews/full/322/322418.png?modified=1748884796"
					iconSrc={splitTabsIconSrc}
					link="https://addons.mozilla.org/firefox/addon/split-tabs"
					repoUrl="https://github.com/bengaudry/split-tabs"
				/>
				<Project
					title="Studyswipe"
					state="active"
					description={t("projects.studyswipe.description")}
					imgSrc={studyswipeIllustrationSrc}
					iconSrc={studyswipeIconSrc}
					link="https://studyswipe.vercel.app"
				/>
			</ResponsiveWrapper>
		</section>
	)
}
