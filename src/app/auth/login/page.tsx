'use client'

import Button from '@/components/UI/Button/Button'
import Error from '@/components/UI/Error/Error'
import H1 from '@/components/UI/H1/H1'
import Input from '@/components/UI/Input/Input'
import Paragraph from '@/components/UI/Paragraph/Paragraph'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface LoginInputs {
	username: string
	password: string
}

export default function Login() {
	const [isLoading, setisLoading] = useState(false)
	const [error, setError] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInputs>()

	const onSubmit = async (formData: LoginInputs) => {
		console.log(formData)

		setError('')
		setisLoading(true)
		const waitTimeInMilliseconds = 3000
		await new Promise((resolve) =>
			setTimeout(resolve, waitTimeInMilliseconds)
		)

		setisLoading(false)
		setError('There was an error loging in, try again later.')
	}

	return (
		<div>
			<H1>Login</H1>
			<Error>{error}</Error>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Username"
					placeholder="example"
					{...register('username', {
						required: 'This field is required.',
					})}
					error={errors.username?.message}
				/>
				<PasswordInput
					label="Password"
					placeholder="12345"
					{...register('password', {
						required: 'This field is required.',
						minLength: {
							value: 8,
							message:
								'Your password must be at least 8 characters long',
						},
						validate: (value) => {
							let mistakes = []

							if (!/(?=.*[A-Z])/.test(value)) {
								mistakes.push('uppercase letter')
							}

							if (!/(?=.*\d)/.test(value)) {
								mistakes.push('number')
							}

							if (!/[^A-Za-z0-9]/.test(value)) {
								mistakes.push('special character')
							}

							// If there are any mistakes, return the array of error messages
							if (mistakes.length > 0) {
								return (
									'Your password must include: ' +
									mistakes.join(', ')
								)
							}

							// If all requirements are met, return true (no error)
							return true
						},
					})}
					error={errors.password?.message}
				/>
				<Paragraph>
					Don&apos;t have an account?{' '}
					<Link href={'/auth/register'}>Register</Link>.
				</Paragraph>
				<Button isLoading={isLoading} type="submit">
					Login
				</Button>
			</form>
		</div>
	)
}
