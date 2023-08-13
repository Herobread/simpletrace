'use client'

import Button from '@/components/UI/Button/Button'
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'
import Input from '@/components/UI/Input/Input'
import Margin from '@/components/layout/Margin/Margin'
import { projectNameValidationOptions } from '@/lib/validation/projectName'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import updateProject from './updateProjectData'

interface ProjectSettingsFormProps {
	id: string
	projectData: {
		id: string
		createdAt: Date
		name: string
		description: string | null
		open: number
		closed: number
	}
}

interface ProjectSettingsFormInputs {
	name: string
	description: string
}

export default function ProjectSettingsForm({
	id,
	projectData,
}: ProjectSettingsFormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ProjectSettingsFormInputs>()

	const onSubmit = async (formData: ProjectSettingsFormInputs) => {
		setError('')
		setSuccess('')
		setIsLoading(true)

		try {
			await updateProject(id, formData)
			setSuccess('Project data updated.')
		} catch (error: any) {
			setError(error.message)
		}
		setIsLoading(false)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Project name"
				defaultValue={projectData.name}
				error={errors.name?.message}
				{...register('name', projectNameValidationOptions)}
			/>
			<Margin height={10} />
			<Input
				label="Description"
				defaultValue={projectData.description || ''}
				error={errors.description?.message}
				{...register('description')}
			/>
			<Margin height={10} />
			<Button isLoading={isLoading} type="submit">
				Save
			</Button>
			<Margin height={20} />
			<ErrorAlert>{error}</ErrorAlert>
		</form>
	)
}
