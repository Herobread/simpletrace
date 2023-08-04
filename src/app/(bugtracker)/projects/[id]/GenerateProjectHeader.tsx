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

		return <div>{JSON.stringify(projectData)}</div>
	} catch (error: any) {
		return <ErrorAlert>{error.message}</ErrorAlert>
	}
}
