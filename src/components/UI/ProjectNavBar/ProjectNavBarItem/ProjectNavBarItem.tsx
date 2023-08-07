import Link from 'next/link'
import s from './ProjectNavBarItem.module.css'

interface ProjectNavBarItemProps {
	text: string
	icon: any
	href: string
}

export default function ProjectNavBarItem({
	text,
	icon,
	href,
}: ProjectNavBarItemProps) {
	return (
		<Link href={href} className={s.container}>
			{icon}
			<span>{text}</span>
		</Link>
	)
}
