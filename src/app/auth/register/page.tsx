'use client'

import Button from '@/components/UI/Button/Button'
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
import { signup } from './signup'
import Protected from '@/components/auth/Protected/Protected'
import { signIn } from 'next-auth/react'
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'

export interface RegisterInputs {
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
		setError('')
		setisLoading(true)

		try {
			await signup(formData)

			await signIn('credentials', {
				...formData,
				redirect: false,
				callbackUrl: '/projects',
			})
		} catch (error: any) {
			setError(error.message || 'An error has occured, try again later.')
		}

		setisLoading(false)
	}

	return (
		<div>
			<Protected user="only-unauthenticated" redirectTo="/projects" />
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
				<ErrorAlert>{error}</ErrorAlert>
			</form>
		</div>
	)
}
