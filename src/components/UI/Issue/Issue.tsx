import Image from 'next/image'
import H3 from '../H3/H3'
import Paragraph from '../Paragraph/Paragraph'
import s from './Issue.module.css'
import Right from '@/../public/icons/Right.svg'
import Link from 'next/link'

interface IssueProps {
	header: string
	description?: string | null
	projectId: string
	issueId: string
}

export default function Issue({
	header,
	description,
	issueId,
	projectId,
}: IssueProps) {
	return (
		<Link
			href={`/projects/${[projectId]}/issue/${issueId}`}
			className={s.container}
		>
			<div className={s.hero}>
				<H3>{header}</H3>
				<Paragraph>{description}</Paragraph>
			</div>
			<Image src={Right} alt="" className={s.arrow} />
		</Link>
	)
}
