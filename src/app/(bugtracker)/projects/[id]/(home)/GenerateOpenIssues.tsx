import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'
import getIssues from './getIssues'
import Issue from '@/components/UI/Issue/Issue'
import IssueContainer from '@/components/UI/IssueContainer/IssueContainer'
import Paragraph from '@/components/UI/Paragraph/Paragraph'

interface GenerateOpenIssuesProps {
	id: string
}

export default async function GenerateOpenIssues({
	id,
}: GenerateOpenIssuesProps) {
	try {
		const openIssues = await getIssues(id, true)

		if (!openIssues.length) {
			return (
				<Paragraph>
					No issues found, add issue by pressing button above.
				</Paragraph>
			)
		}

		return (
			<IssueContainer>
				{openIssues.map((issue) => {
					const { title, createdAt } = issue
					const issueId = issue.id
					let openedAt = createdAt.toLocaleString('en-UK')
					let description = 'Opened at ' + openedAt

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
