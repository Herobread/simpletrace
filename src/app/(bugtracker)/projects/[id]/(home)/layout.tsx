import Protected from '@/components/auth/Protected/Protected'
import GenerateProjectHeader from './GenerateProjectHeader'
import Margin from '@/components/layout/Margin/Margin'
import { Suspense } from 'react'
import ProjectBugInfoPanelSkeleton from '@/components/UI/ProjectBugInfoPanel/ProjectBugInfoPanelSkeleton/ProjectBugInfoPanelSkeleton'
import ProjectNavBar from '@/components/UI/ProjectNavBar/ProjectNavBar'

interface ProjectsLayoutProps {
	children: React.ReactNode
	modal: React.ReactNode
	issue: React.ReactNode
	params: {
		id: string
	}
}

export default function ProjectsLayout({
	children,
	params,
	issue,
	modal,
}: ProjectsLayoutProps) {
	const { id } = params

	return (
		<>
			<Protected redirectTo="/auth/login" user="only-authenticated" />
			<Margin height={50} />
			<Suspense fallback={<ProjectBugInfoPanelSkeleton id={id} />}>
				<GenerateProjectHeader id={id} />
			</Suspense>
			<Margin height={20} />
			<ProjectNavBar projectId={id} />
			<Margin height={30} />
			{children}
			{issue}
			{modal}
		</>
	)
}
