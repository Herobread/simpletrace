import s from './ProjectNavBar.module.css'
import ProjectNavBarItem from './ProjectNavBarItem/ProjectNavBarItem'
import Lightning from '@/../public/icons/Lightning.svg'
import Team from '@/../public/icons/Users.svg'
import Settings from '@/../public/icons/Settings.svg'
import Image from 'next/image'

interface ProjectNavBarProps {
	projectId: string
}

export default function ProjectNavBar({ projectId }: ProjectNavBarProps) {
	return (
		<div className={s.container}>
			<ProjectNavBarItem
				icon={<Image src={Lightning} alt="" />}
				href={`/projects/${projectId}`}
				text="Issues"
			/>
			<ProjectNavBarItem
				icon={<Image src={Team} alt="" />}
				href={`/projects/${projectId}/team`}
				text="Team"
			/>
			<ProjectNavBarItem
				icon={<Image src={Settings} alt="" />}
				href={`/projects/${projectId}/settings`}
				text="Project settings"
			/>
		</div>
	)
}
