import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { getProjectsList, type ProjectProps } from '@/lib/projects.ts'

export const ProjectsContext = createContext<{
	selectedProject: ProjectProps | null
	setSelectedProject: Dispatch<SetStateAction<ProjectProps | null>>
} | null>(null)

export function useProjectsContext() {
	const ctx = useContext(ProjectsContext)
	if (ctx === null) {
		throw new Error(
			'useProjectsContext must be used within a ProjectsProvider'
		)
	}
	return ctx
}

export function ProjectsProvider({
	children,
	projects,
	defaultProjectId
}: PropsWithChildren<{
	defaultProjectId: string | null
	projects: ReturnType<typeof getProjectsList>
}>) {
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		null
	)

	useEffect(() => {
		if (defaultProjectId) {
			const proj = projects.find((p) => p.id === defaultProjectId)
			if (proj) setSelectedProject(proj)
		}
	}, [defaultProjectId, projects])

	return (
		<ProjectsContext.Provider
			value={{ selectedProject, setSelectedProject }}
		>
			{children}
		</ProjectsContext.Provider>
	)
}
