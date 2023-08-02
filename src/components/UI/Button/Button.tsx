import Spinner from '@/components/UI/Spinner/Spinner'
import s from './Button.module.css'
import cn from '@/lib/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	isLoading?: boolean
}

export default function Button({ isLoading, children, ...props }: ButtonProps) {
	let styles = [s.button]

	if (isLoading) {
		styles.push(s.loading)
	}

	return (
		<button className={cn(styles)} disabled={isLoading} {...props}>
			{isLoading && <Spinner className={s.spinner} />}
			{children}
		</button>
	)
}
