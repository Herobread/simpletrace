'use client'

import Button from '@/components/UI/Button/Button'
import Input from '@/components/UI/Input/Input'
import Margin from '@/components/layout/Margin/Margin'
import { projectNameValidationOptions } from '@/lib/validation/projectName'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import createProject from './createProject'
import { useRouter } from 'next/navigation'
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'

export interface CreateNewProjectInputs {
	name: string
	description?: string
}

export default function CreateNewProjectForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateNewProjectInputs>()

	const onSubmit = async (data: CreateNewProjectInputs) => {
		setError('')
		setIsLoading(true)

		try {
			const project = await createProject(data)

			router.push(`/projects/${project.id}`)
		} catch (error: any) {
			setError(error.message || 'Something went wrong.')
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Project name"
				{...register('name', projectNameValidationOptions)}
				error={errors.name?.message}
			/>
			<Margin height={10} />
			<Button type="submit" isLoading={isLoading}>
				Create
			</Button>
			<Margin height={30} />
			<ErrorAlert>{error}</ErrorAlert>
		</form>
	)
}
