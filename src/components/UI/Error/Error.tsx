import s from './Error.module.css'

interface ErrorProps {
	children: React.ReactNode
}

export default function Error({ children }: ErrorProps) {
	return <p className={s.error}>{children}</p>
}
