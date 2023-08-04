import s from './ProjectBugInfoPanel.module.css'

interface ProjectBugInfoPanelProps {
	children: React.ReactNode
}

export default function ProjectBugInfoPanel({
	children,
}: ProjectBugInfoPanelProps) {
	return <div className={s.container}>{children}</div>
}
