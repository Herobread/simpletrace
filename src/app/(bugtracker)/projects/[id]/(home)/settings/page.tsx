import InfoAlert from '@/components/UI/InfoAlert/InfoAlert'
import Margin from '@/components/layout/Margin/Margin'
import ProjectSettingsForm from './ProjectSettingsForm'
import H1 from '@/components/UI/H1/H1'
import getProjectData from '../getProjectData'

interface ProjectProps {
	params: {
		id: string
	}
}

export default async function Settings({ params: { id } }: ProjectProps) {
	const projectData = await getProjectData(id)

	return (
		<div>
			<H1>Settings</H1>
			<Margin height={20} />
			<ProjectSettingsForm id={id} projectData={projectData} />
		</div>
	)
}
