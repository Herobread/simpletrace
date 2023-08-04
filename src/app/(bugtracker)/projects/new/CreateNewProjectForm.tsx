'use client'

import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import Margin from '@/components/layout/Margin/Margin'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface CreateNewProjectInputs {
	name: string
	descripiton?: string
}

export default function CreateNewProjectForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateNewProjectInputs>()

	const onSubmit = async (data: FormData) => {
		setIsLoading(true)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Project name"
				{...register('name')}
				error={errors.name?.message}
			/>
			<Margin height={10} />
			<Button type="submit" isLoading={isLoading}>
				Create
			</Button>
		</form>
	)
}
