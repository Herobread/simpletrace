import ProjectBugInfoPanel from '@/components/UI/ProjectBugInfoPanel/ProjectBugInfoPanel'
import getProjectData from './getProjectData'
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'

interface GenerateProjectHeaderProps {
	id: string
}

export default async function GenerateProjectHeader({
	id,
}: GenerateProjectHeaderProps) {
	try {
		const projectData = await getProjectData(id)

		const { description, name, open, closed } = projectData

		return (
			<ProjectBugInfoPanel
				id={id}
				closed={closed}
				open={open}
				description={description}
				header={name}
			/>
		)
	} catch (error: any) {
		return <ErrorAlert>{error.message}</ErrorAlert>
	}
}
