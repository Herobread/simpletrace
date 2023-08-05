import s from './H3.module.css'

interface H3Props {
	children: React.ReactNode
}

export default function H3({ children }: H3Props) {
	return <h3 className={s.header}>{children}</h3>
}
