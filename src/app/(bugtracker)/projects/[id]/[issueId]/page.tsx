import Margin from '@/components/layout/Margin/Margin'
import getIssueInfo from './getIssueInfo'
import UpdateStatusButton from './UpdateStatusButton'

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
		<div>
			<Margin height={50} />
			{JSON.stringify(issueData)}
			<UpdateStatusButton
				isOpen={issueData?.isOpen!}
				issueId={issueData?.id!}
			/>
		</div>
	)
}
