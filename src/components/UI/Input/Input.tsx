import { forwardRef } from 'react'
import s from './Input.module.css'
import cn from '@/lib/cn'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, ...props }, ref) => {
		const { name } = props
		const inputStyles = [s.input]
		const labelStyles = []

		if (error) {
			inputStyles.push(s.errorInput)
			labelStyles.push(s.errorLabel)
		}

		return (
			<div className={s.container}>
				<label htmlFor={name} className={cn(labelStyles)}>
					{label}
				</label>
				<input
					type="text"
					{...props}
					ref={ref}
					className={cn(inputStyles)}
				/>
				{error && <div className={s.error}>{error}</div>}
			</div>
		)
	}
)
Input.displayName = 'Input'

export default Input
