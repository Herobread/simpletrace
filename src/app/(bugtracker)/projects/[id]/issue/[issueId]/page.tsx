import Margin from '@/components/layout/Margin/Margin'
import getIssueInfo from './getIssueInfo'
import UpdateStatusButton from './UpdateStatusButton'
import { Suspense } from 'react'
import Spinner from '@/components/UI/Spinner/Spinner'
import H1 from '@/components/UI/H1/H1'
import Paragraph from '@/components/UI/Paragraph/Paragraph'

interface IssueViewProps {
	params: {
		id: string
		issueId: string
	}
}

export default async function IssueView({ params }: IssueViewProps) {
	const { id, issueId } = params

	const issueData = await getIssueInfo(issueId)

	return (
		<>
			<Suspense fallback={<Spinner color="black" />}>
				<H1>{issueData?.title}</H1>
				<Margin height={20} />
				<Paragraph>{issueData?.description}</Paragraph>
				<Margin height={20} />
				<UpdateStatusButton
					projectId={id}
					isOpen={issueData?.isOpen!}
					issueId={issueData?.id!}
				/>
			</Suspense>
		</>
	)
}
