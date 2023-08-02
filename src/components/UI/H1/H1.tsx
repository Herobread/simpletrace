import s from './H1.module.css'

interface H1Props {
	children: React.ReactNode
}

export default function H1({ children }: H1Props) {
	return <h1 className={s.header}>{children}</h1>
}
