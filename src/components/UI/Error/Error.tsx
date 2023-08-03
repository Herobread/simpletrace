import Image from 'next/image'
import s from './Error.module.css'
import danger from '@/../public/icons/Danger.svg'

interface ErrorProps {
	children: React.ReactNode
}

export default function Error({ children }: ErrorProps) {
	if (!children) return null

	return (
		<div className={s.container}>
			<Image src={danger} alt="" />
			<p className={s.error}>{children}</p>
		</div>
	)
}
