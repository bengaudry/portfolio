import { useProjectsContext } from '@/components/projects/ProjectsContext.tsx'
import { ListItem, Modal } from '@/components/ui'
import styles from './ProjectsModal.module.scss'
import { useTranslation } from '@/i18n/utils.ts'
import type { ProjectState } from '@/lib/projects.ts'
import { ButtonLink } from '@/components/misc/Button/Button.tsx'
import { ExternalLink } from 'lucide-react'

function ProjectStatePill({ state }: { state: ProjectState }) {
	const { t } = useTranslation()
	const classNames = [styles.ProjectStatePill]

	return (
		<div aria-label={state} className={classNames.join(' ')}>
			<span />
			<span>{t('common.' + state)}</span>
		</div>
	)
}

export function ProjectsModal() {
	const { selectedProject, setSelectedProject } = useProjectsContext()

	const { t } = useTranslation()

	return (
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
					/>
					<div className={styles.ModalProjectInfo}>
						<div className={styles.ModalProjectSkills}>
							{selectedProject.associatedSkills.map((skill) => {
								return (
									<ListItem
										key={skill._id}
										title={skill.title}
										size="sm"
										variant="secondary"
										iconUrl={skill.iconUrl}
									/>
								)
							})}
						</div>
						<p className={styles.ModalProjectDescription}>
							{selectedProject.description}
						</p>
						<div className={styles.ModalProjectMeta}>
							<ProjectStatePill state={selectedProject.state} />
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
									{t('projects.github')}
									<ExternalLink size={16} />
								</a>
							)}
						</div>
						{selectedProject.link && (
							<ButtonLink
								href={selectedProject.link}
								rel="noopener noreferrer"
								target="_blank"
								label={
									selectedProject.linkLabel ??
									t('projects.visit-project')
								}
								EndContent={<ExternalLink size={16} />}
							/>
						)}
					</div>
				</div>
			)}
		</Modal>
	)
}
