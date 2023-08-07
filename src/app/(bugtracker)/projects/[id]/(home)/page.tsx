import Margin from '@/components/layout/Margin/Margin'
import { Suspense } from 'react'
import GenerateProjectHeader from './GenerateProjectHeader'
import H2 from '@/components/UI/H2/H2'
import GenerateOpenIssues from './GenerateOpenIssues'
import GenerateClosedIssues from './GenerateClosedIssues'
import ProjectBugInfoPanelSkeleton from '@/components/UI/ProjectBugInfoPanel/ProjectBugInfoPanelSkeleton/ProjectBugInfoPanelSkeleton'
import IssueSkeleton from '@/components/UI/Issue/IssueSkeleton/IssueSkeleton'
import ProjectNavBar from '@/components/UI/ProjectNavBar/ProjectNavBar'

interface ProjectProps {
	params: {
		id: string
	}
}

export default async function Project({ params }: ProjectProps) {
	const { id } = params

	return (
		<div>
			<H2>Open issues</H2>
			<Margin height={20} />
			<Suspense fallback={<IssueSkeleton count={8} />}>
				<GenerateOpenIssues id={id} />
			</Suspense>
			<Margin height={30} />
			<H2>Closed issues</H2>
			<Margin height={20} />
			<Suspense fallback={<IssueSkeleton count={8} />}>
				<GenerateClosedIssues id={id} />
			</Suspense>
		</div>
	)
}
