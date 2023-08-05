import s from './H2.module.css'

interface H2Props {
	children: React.ReactNode
}

export default function H2({ children }: H2Props) {
	return <h2 className={s.header}>{children}</h2>
}
