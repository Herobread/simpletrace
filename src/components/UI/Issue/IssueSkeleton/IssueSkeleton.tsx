import Skeleton from 'react-loading-skeleton'
import s from './IssueSkeleton.module.css'
import Margin from '@/components/layout/Margin/Margin'

interface IssueSkeletonProps {
	count: number
}

export default function IssueSkeleton({ count }: IssueSkeletonProps) {
	return [...Array(count)].map((e, i) => (
		<>
			<div className={s.container} key={i}>
				<Skeleton height={28.8} width={200} />
				<Skeleton height={19.2} width={150} />
			</div>
			<Margin height={20} />
		</>
	))
}
