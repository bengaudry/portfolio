import {
	getProjectsList,
	type ProjectCategory,
	type ProjectProps
} from '@/lib/projects.ts'
import { useTranslation } from '@/i18n/utils.ts'
import styles from './SubProjectsList.module.scss'
import { useProjectsContext } from '@/components/projects/ProjectsContext.tsx'

export function SubProjectsList({ category }: { category: ProjectCategory }) {
	const { t } = useTranslation()
	const categoryProjects = getProjectsList(t).filter(
		(project) => project.category === category
	)

	const { setSelectedProject } = useProjectsContext()

	return (
		<ul className={styles.SubProjectsList}>
			{categoryProjects.map((project) => (
				<li
					key={project.id}
					className={styles.ProjectCard}
					onClick={() => setSelectedProject(project)}
				>
					<img src={project.imgSrc} alt={project.title} />
					<div className={styles.ProjectCardHeader}>
						{project.iconSrc && (
							<img
								src={project.iconSrc}
								width={32}
								height={32}
								alt={project.title + ' icon'}
							/>
						)}
						<h3>{project.title}</h3>
					</div>
					<p>{project.description}</p>
				</li>
			))}
		</ul>
	)
}
