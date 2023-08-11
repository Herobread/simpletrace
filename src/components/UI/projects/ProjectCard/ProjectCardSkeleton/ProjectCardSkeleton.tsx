import CardBase from '../../CardBase/CardBase'
import s from './ProjectCardSkeleton.module.css'
import Skeleton from 'react-loading-skeleton'

interface ProjectCardSkeletonProps {
	count: number
}

export default function ProjectCardSkeleton({
	count,
}: ProjectCardSkeletonProps) {
	return [...Array(count)].map((e, i) => (
		<CardBase key={i}>
			<div className={s.container}>
				<Skeleton width={100} height={22} />
				<Skeleton width={140} height={16} />
				<div className={s.issues}>
					<div>
						<Skeleton width={60} height={16} />
					</div>
					<div className={s.open}>
						<Skeleton width={60} height={16} />
					</div>
				</div>
			</div>
			<Skeleton height={4} width="100%" />
		</CardBase>
	))
}
