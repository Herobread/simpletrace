import ProjectBugInfoPanel from '@/components/UI/ProjectBugInfoPanel/ProjectBugInfoPanel'
import getProjectData from './getProjectData'
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'
import getIssues from './getIssues'
import Issue from '@/components/UI/Issue/Issue'
import IssueContainer from '@/components/UI/IssueContainer/IssueContainer'

interface GenerateOpenIssuesProps {
	id: string
}

export default async function GenerateOpenIssues({
	id,
}: GenerateOpenIssuesProps) {
	try {
		const openIssues = await getIssues(id, true)

		return (
			<IssueContainer>
				{openIssues.map((issue) => {
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
