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
import { signIn } from 'next-auth/react'
import Protected from '@/components/auth/Protected/Protected'

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
		setError('')
		setisLoading(true)

		const response = await signIn('credentials', {
			...formData,
			callbackUrl: '/projects',
			redirect: false,
		})

		if (response?.error) {
			setError(response?.error)
		}

		setisLoading(false)
	}

	return (
		<div>
			<Protected user="only-unauthenticated" redirectTo="/projects" />
			<H1>Login</H1>
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
					Don&apos;t have an account?{' '}
					<Link href={'/auth/register'}>Register</Link>.
				</Paragraph>
				<Margin height={10} />
				<Button isLoading={isLoading} type="submit">
					Login
				</Button>
				<Margin height={20} />
				<Error>{error}</Error>
			</form>
		</div>
	)
}
