import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'
import getIssues from './getIssues'
import Issue from '@/components/UI/Issue/Issue'
import IssueContainer from '@/components/UI/IssueContainer/IssueContainer'

interface GenerateClosedIssuesProps {
	id: string
}

export default async function GenerateClosedIssues({
	id,
}: GenerateClosedIssuesProps) {
	try {
		const closedIssues = await getIssues(id, false)

		return (
			<IssueContainer>
				{closedIssues.map((issue) => {
					const { description, title } = issue
					const issueId = issue.id

					return (
						<Issue
							issueId={issueId}
							projectId={id}
							header={title}
							description={description}
							key={id}
						/>
					)
				})}
			</IssueContainer>
		)
	} catch (error: any) {
		return <ErrorAlert>{error.message}</ErrorAlert>
	}
}
