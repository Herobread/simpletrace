import Margin from '@/components/layout/Margin/Margin'
import Button from '../Button/Button'
import H1 from '../H1/H1'
import Paragraph from '../Paragraph/Paragraph'
import ProgressBar from '../ProgressBar/ProgressBar'
import NumDescription from './NumDescription/NumDescription'
import s from './ProjectBugInfoPanel.module.css'
import Link from 'next/link'

interface ProjectBugInfoPanelProps {
	id: string
	header: string
	description?: string | null
	open: number
	closed: number
}

export default function ProjectBugInfoPanel({
	id,
	closed,
	description,
	header,
	open,
}: ProjectBugInfoPanelProps) {
	description ??= 'No description provided.'

	return (
		<div className={s.container}>
			<div className={s.mainInfoContainer}>
				<div className={s.left}>
					<H1>{header}</H1>
					<Margin height={16} />
					<Paragraph>{description}</Paragraph>
					<Margin height={20} />
					<Link href={`/projects/${id}/new-issue/`}>
						<Button variant="accent">Open issue</Button>
					</Link>
				</div>
				<div className={s.right}>
					<NumDescription
						number={open + closed}
						description="Total"
					/>
					<NumDescription number={open} description="Open" />
					<NumDescription number={closed} description="Closed" />
				</div>
			</div>
			<Margin height={10} />
			<ProgressBar value={open} max={open + closed} />
		</div>
	)
}
