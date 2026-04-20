import { useState } from "react"
import { useTranslation } from "react-i18next"
import { List, ResponsiveWrapper, SectionTitle, Modal, Lightbox } from "../../ui"
import splitTabsIconSrc from "../../../assets/split-tabs-icon.svg"
import studyswipeIllustrationSrc from "../../../assets/studyswipe-screenshot.png"
import studyswipeIconSrc from "../../../assets/studyswipe-icon.png"
import compilerIllustrationSrc from "../../../assets/compiler-illustration.png"
import compilerIconSrc from "../../../assets/binary-icon.png"
import irrigationProjectIllustrationSrc from "../../../assets/irrigation-proj-illustration.png"
import irrigationProjectIconSrc from "../../../assets/flowerpot-icon.png"
import externalLinkIconSrc from "../../../assets/icons/icons8-link-48.png"
import tradeFairScreenshotSrc from "../../../assets/trade-fair-screenshot.png"
import tradeFairIconSrc from "../../../assets/polytech.webp"
import styles from "./Projects.module.scss"
import { ButtonLink } from "../../misc/Button/Button"

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

export type ProjectProps = {
	title: string
	description: string
	imgSrc: string
	iconSrc?: string
	state: ProjectState
	link?: string
	linkLabel?: string
	repoUrl?: string
	onOpenModal?: () => void
}

export function Project({
	title,
	description,
	imgSrc,
	iconSrc,
	repoUrl,
	onOpenModal
}: ProjectProps) {
	const { t } = useTranslation()
	return (
		<List className={styles.ProjectItem} title={title} iconUrl={iconSrc}>
			<article>
				<img
					src={imgSrc}
					className={styles.ProjectPicture}
					loading="lazy"
					width={350}
					height={(350 * 9) / 16}
					alt={`${title} screenshot`}
					style={{ cursor: onOpenModal ? "pointer" : "default" }}
					onClick={onOpenModal}
					role={onOpenModal ? "button" : undefined}
					tabIndex={onOpenModal ? 0 : undefined}
					onKeyDown={(e) => {
						if (
							onOpenModal &&
							(e.key === "Enter" || e.key === " ")
						) {
							e.preventDefault()
							onOpenModal()
						}
					}}
				/>

				<div>
					<p>{description}</p>
					<div className={styles.ProjectLinks}>
						{onOpenModal && (
							<button
								className={styles.DetailsButton}
								onClick={onOpenModal}
								type="button"
							>
								{t("projects.view-details")}
							</button>
						)}
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
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		null
	)
	const [fullscreenImage, setFullscreenImage] = useState<{
		src: string
		alt: string
	} | null>(null)

	const projectList: ProjectProps[] = [
		{
			title: "Side by Side",
			state: "active",
			description: t("projects.side-by-side.description"),
			imgSrc: "https://addons.mozilla.org/user-media/previews/full/322/322418.png?modified=1748884796",
			iconSrc: splitTabsIconSrc,
			link: "https://addons.mozilla.org/firefox/addon/side-by-side",
			linkLabel: t("projects.side-by-side.link-label"),
			repoUrl: "https://github.com/bengaudry/side-by-side"
		},
		{
			title: "Studyswipe",
			state: "active",
			description: t("projects.studyswipe.description"),
			imgSrc: studyswipeIllustrationSrc,
			iconSrc: studyswipeIconSrc,
			link: "https://studyswipe.vercel.app",
			linkLabel: t("projects.studyswipe.link-label")
		},
		{
			title: t("projects.trade-fair.title"),
			state: "active",
			description: t("projects.trade-fair.description"),
			imgSrc: tradeFairScreenshotSrc,
			iconSrc: tradeFairIconSrc,
			link: "https://forum-polytech-lyon.org",
			linkLabel: t("projects.trade-fair.link-label"),
			repoUrl: "https://github.com/bengaudry/forum-polytech-lyon"
		},
		{
			title: t("projects.compiler.title"),
			state: "inactive",
			description: t("projects.compiler.description"),
			imgSrc: compilerIllustrationSrc,
			iconSrc: compilerIconSrc
		},
		{
			title: t("projects.irrigation-system.title"),
			state: "inactive",
			description: t("projects.irrigation-system.description"),
			imgSrc: irrigationProjectIllustrationSrc,
			iconSrc: irrigationProjectIconSrc
		}
	]

	return (
		<section className={styles.Projects}>
			<ResponsiveWrapper withMargin withBorder>
				<SectionTitle title={t("projects.title")} />
				{projectList.map((project) => (
					<Project
						key={project.title}
						{...project}
						onOpenModal={() => setSelectedProject(project)}
					/>
				))}
			</ResponsiveWrapper>

			<Modal
				isOpen={selectedProject !== null}
				onClose={() => setSelectedProject(null)}
				title={selectedProject?.title}
			>
				{selectedProject && (
					<div className={styles.ModalProjectDetails}>
						<img
							src={selectedProject.imgSrc}
							alt={`${selectedProject.title} screenshot`}
							className={styles.ModalProjectImage}
							style={{ cursor: "pointer" }}
							onClick={() =>
								setFullscreenImage({
									src: selectedProject.imgSrc,
									alt: `${selectedProject.title} screenshot`
								})
							}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault()
									setFullscreenImage({
										src: selectedProject.imgSrc,
										alt: `${selectedProject.title} screenshot`
									})
								}
							}}
						/>
						<div className={styles.ModalProjectInfo}>
							<p className={styles.ModalProjectDescription}>
								{selectedProject.description}
							</p>
							<div className={styles.ModalProjectMeta}>
								<ProjectStatePill
									state={selectedProject.state}
								/>
								{selectedProject.repoUrl && (
									<a
										href={selectedProject.repoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.ModalRepoLink}
									>
										<img
											height={24}
											width={24}
											alt="Github repository"
											src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
										/>
										{t("projects.github")}
									</a>
								)}
							</div>
							{selectedProject.link && (
								<ButtonLink
									to={selectedProject.link}
									rel="noopener noreferrer"
									target="_blank"
									label={
										selectedProject.linkLabel ??
										t("projects.visit-project")
									}
									rightIcon={{
										src: externalLinkIconSrc,
										alt: "External link icon"
									}}
								/>
							)}
						</div>
					</div>
				)}
			</Modal>

			<Lightbox
				isOpen={fullscreenImage !== null}
				onClose={() => setFullscreenImage(null)}
				imageSrc={fullscreenImage?.src ?? ""}
				imageAlt={fullscreenImage?.alt ?? ""}
			/>
		</section>
	)
}
