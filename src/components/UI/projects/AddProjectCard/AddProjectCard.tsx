import Link from 'next/link'
import CardBase from '../CardBase/CardBase'
import s from './AddProjectCard.module.css'
import Plus from '@/../public/icons/Plus.svg'
import Image from 'next/image'

interface AddProjectCardProps {}

export default function AddProjectCard({}: AddProjectCardProps) {
	return (
		<Link href={'/projects/new'}>
			<CardBase>
				<div className={s.container}>
					<Image src={Plus} alt="" />
					<span>Create new</span>
				</div>
			</CardBase>
		</Link>
	)
}
