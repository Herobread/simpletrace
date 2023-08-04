import s from './CardBase.module.css'

interface CardBaseProps {
	children: React.ReactNode
}

export default function CardBase({ children }: CardBaseProps) {
	return <div className={s.container}>{children}</div>
}
