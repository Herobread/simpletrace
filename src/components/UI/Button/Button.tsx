import Spinner from '@/components/UI/Spinner/Spinner'
import s from './Button.module.css'
import cn from '@/lib/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	isLoading?: boolean
	variant?: 'normal' | 'accent'
}

export default function Button({
	isLoading,
	variant,
	children,
	...props
}: ButtonProps) {
	let styles = [s.button]

	if (variant == 'accent') {
		styles.push(s.accent)
	}

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
