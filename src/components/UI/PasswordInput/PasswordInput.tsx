import { forwardRef, useState } from 'react'
import s from './PasswordInput.module.css'

import hide from '@/../public/icons/Hide.svg'
import show from '@/../public/icons/Eye.svg'
import Image from 'next/image'
import cn from '@/lib/cn'

export interface PasswordInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: string
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ error, label, ...props }, ref) => {
		const [isShown, setIsShown] = useState(false)

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
				<div className={s.passwordContainer}>
					<input
						type={isShown ? 'text' : 'password'}
						className={cn(inputStyles)}
						{...props}
					/>
					<button
						type="button"
						onClick={() => {
							setIsShown(!isShown)
						}}
						className={s.hideShowButton}
					>
						{isShown ? (
							<Image src={hide} alt="" />
						) : (
							<Image src={show} alt="" />
						)}
					</button>
				</div>
				{error && <div className={s.error}>{error}</div>}
			</div>
		)
	}
)
PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
