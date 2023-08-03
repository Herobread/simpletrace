'use client'

import Button from '@/components/UI/Button/Button'
import Error from '@/components/UI/Error/Error'
import H1 from '@/components/UI/H1/H1'
import Input from '@/components/UI/Input/Input'
import Paragraph from '@/components/UI/Paragraph/Paragraph'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import Margin from '@/components/layout/Margin/Margin'
import { passwordValidationOptions } from '@/lib/validation/password'
import { usernameValidationOptions } from '@/lib/validation/username'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface RegisterInputs {
	username: string
	password: string
}

export default function Register() {
	const [isLoading, setisLoading] = useState(false)
	const [error, setError] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInputs>()

	const onSubmit = async (formData: RegisterInputs) => {
		console.log(formData)

		setError('')
		setisLoading(true)
		const waitTimeInMilliseconds = 5000
		await new Promise((resolve) =>
			setTimeout(resolve, waitTimeInMilliseconds)
		)

		setisLoading(false)
		setError('Example error. Only UI was made, so no functionality yet.')
	}

	return (
		<div>
			<H1>Register</H1>
			<Margin height={20} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Username"
					placeholder="example"
					{...register('username', usernameValidationOptions)}
					error={errors.username?.message}
				/>
				<Margin height={10} />
				<PasswordInput
					label="Password"
					placeholder="12345"
					{...register('password', passwordValidationOptions)}
					error={errors.password?.message}
				/>
				<Margin height={10} />
				<Paragraph>
					Already have an account?{' '}
					<Link href={'/auth/login'}>Login</Link>.
				</Paragraph>
				<Margin height={10} />
				<Button isLoading={isLoading} type="submit">
					Register
				</Button>
				<Margin height={20} />
				<Error>{error}</Error>
			</form>
		</div>
	)
}
