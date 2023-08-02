'use client'

import Button from '@/components/UI/Button/Button'
import H1 from '@/components/UI/H1/H1'
import Input from '@/components/UI/Input/Input'
import Paragraph from '@/components/UI/Paragraph/Paragraph'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface RegisterInputs {
	username: string
	password: string
}

export default function Register() {
	const [isLoading, setisLoading] = useState(false)
	const { register, handleSubmit } = useForm<RegisterInputs>()

	const onSubmit = async (formData: RegisterInputs) => {
		console.log(formData)

		setisLoading(true)
		const waitTimeInMilliseconds = 3000
		await new Promise((resolve) =>
			setTimeout(resolve, waitTimeInMilliseconds)
		)

		setisLoading(false)
	}

	return (
		<div>
			<H1>Register</H1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Username"
					placeholder="example"
					{...register('username')}
				/>
				<PasswordInput
					label="Password"
					placeholder="12345"
					{...register('password')}
				/>
				<Paragraph>
					Already have an account?{' '}
					<Link href={'/auth/login'}>Login</Link>.
				</Paragraph>
				<Button isLoading={isLoading} type="submit">
					Register
				</Button>
			</form>
		</div>
	)
}
