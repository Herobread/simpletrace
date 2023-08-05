import Spinner from '@/components/UI/Spinner/Spinner'
import Margin from '@/components/layout/Margin/Margin'
import { Suspense } from 'react'
import GenerateProjectHeader from './GenerateProjectHeader'
import H2 from '@/components/UI/H2/H2'
import Issue from '@/components/UI/Issue/Issue'
import GenerateOpenIssues from './GenerateOpenIssues'
import GenerateClosedIssues from './GenerateClosedIssues'
import getProjectData from './getProjectData'

interface ProjectProps {
	params: {
		id: string
	}
}

export default async function Project({ params }: ProjectProps) {
	const { id } = params

	const data = await getProjectData(id)

	return (
		<div>
			<Margin height={50} />
			<Suspense fallback={<Spinner color="black" />}>
				<GenerateProjectHeader id={id} />
			</Suspense>
			<Margin height={30} />
			<H2>Issues</H2>
			<Margin height={20} />
			<Suspense fallback={<Spinner color="black" />}>
				<GenerateOpenIssues id={id} />
			</Suspense>
			<Margin height={30} />
			<H2>Closed issues</H2>
			<Margin height={20} />
			<Suspense fallback={<Spinner color="black" />}>
				<GenerateClosedIssues id={id} />
			</Suspense>
		</div>
	)
}
