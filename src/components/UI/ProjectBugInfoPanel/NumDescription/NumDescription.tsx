import s from './NumDescription.module.css'

interface NumDescriptionProps {
	number: number | string
	description: string
}

export default function NumDescription({
	number,
	description,
}: NumDescriptionProps) {
	return (
		<div className={s.container}>
			<div className={s.number}>{number}</div>
			<div className={s.subheader}>{description}</div>
		</div>
	)
}
