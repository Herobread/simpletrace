import Skeleton from 'react-loading-skeleton'
import s from './ProjectBugInfoPanelSkeleton.module.css'
import Link from 'next/link'
import Button from '../../Button/Button'
import Margin from '@/components/layout/Margin/Margin'

interface ProjectBugInfoPanelSkeletonProps {
	id: string
}

export default function ProjectBugInfoPanelSkeleton({
	id,
}: ProjectBugInfoPanelSkeletonProps) {
	return (
		<div className={s.container}>
			<div className={s.mainInfoContainer}>
				<div className={s.left}>
					<h1>
						<Skeleton height={32.2} width={200} />
					</h1>
					<div style={{ marginTop: '16px' }}>
						<Skeleton height={19.2} />
					</div>
					<Margin height={20} />
					<Skeleton height={33} width={125.02} borderRadius={10} />
				</div>
				<div className={s.right}>
					<Skeleton height={53} width={47} borderRadius={10} />

					<Skeleton height={53} width={47} borderRadius={10} />

					<Skeleton height={53} width={47} borderRadius={10} />
				</div>
			</div>
			<div style={{ marginTop: '10px' }}>
				<Skeleton height={4} width="100%" />
			</div>
		</div>
	)
}
