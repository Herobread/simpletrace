import s from './ProjectsGrid.module.css'

interface ProjectsGridProps {
	children: React.ReactNode
}

export default function ProjectsGrid({ children }: ProjectsGridProps) {
	return <div className={s.grid}>{children}</div>
}
