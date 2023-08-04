import Link from 'next/link'
import ProgressBar from '../../ProgressBar/ProgressBar'
import CardBase from '../CardBase/CardBase'
import s from './ProjectCard.module.css'

interface ProjectCardProps {
	id: string
	header: string
	description: string
	open: number
	closed: number
}

export default function ProjectCard({
	id,
	header,
	description,
	open,
	closed,
}: ProjectCardProps) {
	return (
		<Link href={'/projects'}>
			<CardBase>
				<div className={s.container}>
					<h2 className={s.header}>{header}</h2>
					<p className={s.description}>{description}</p>
					<div className={s.issues}>
						<div>
							<span className={s.bold}>{open} </span>
							Open
						</div>
						<div className={s.closed}>
							<span className={s.bold}>{closed} </span>
							closed
						</div>
					</div>
					<ProgressBar value={open} max={open + closed} />
				</div>
			</CardBase>
		</Link>
	)
}
