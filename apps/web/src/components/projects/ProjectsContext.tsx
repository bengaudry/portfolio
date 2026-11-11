import type { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'
import type { ProjectProps } from '@/lib/projects.ts'

export const ProjectsContext = createContext<{
	projects: ProjectProps[]
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
	projects: ProjectProps[]
}>) {
	const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
		defaultProjectId
			? projects.find((p) => p.id === defaultProjectId) || null
			: null
	)

	return (
		<ProjectsContext.Provider
			value={{ projects, selectedProject, setSelectedProject }}
		>
			{children}
		</ProjectsContext.Provider>
	)
}
