import { forwardRef } from 'react'
import s from './Input.module.css'
import cn from '@/lib/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeAnimation } from '@/lib/animations/fade'

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
			<div>
				<label htmlFor={name} className={cn(labelStyles)}>
					{label}
				</label>
				<input {...props} ref={ref} className={cn(inputStyles)} />
				<AnimatePresence>
					{error && (
						<motion.div className={s.error} {...fadeAnimation}>
							{error}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		)
	}
)
Input.displayName = 'Input'

export default Input
