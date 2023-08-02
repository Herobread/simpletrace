import { forwardRef } from 'react'
import s from './Input.module.css'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, ...props }, ref) => {
		const { name } = props

		return (
			<div className={s.container}>
				<label htmlFor={name}>{label}</label>
				<input type="text" {...props} ref={ref} className={s.input} />
				{error && <div>{error}</div>}
			</div>
		)
	}
)
Input.displayName = 'Input'

export default Input
