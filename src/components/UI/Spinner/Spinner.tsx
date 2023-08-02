import cn from '@/lib/cn'
import s from './Spinner.module.css'

interface SpinnerProps {
	color?: 'white' | 'black'
	className?: string
}

export default function Spinner({ color, className }: SpinnerProps) {
	className = className || ' '
	let styles = [s.spinner, className]

	if (color == 'black') {
		styles.push(s.black)
	} else {
		styles.push(s.white)
	}

	return <div className={cn(styles)}></div>
}
