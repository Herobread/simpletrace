'use client'

import Input from '@/components/UI/Input/Input'
import { useForm } from 'react-hook-form'
import Button from '@/components/UI/Button/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Margin from '@/components/layout/Margin/Margin'
import ErrorAlert from '@/components/UI/ErrorAlert/ErrorAlert'
import newIssue from '@/app/(bugtracker)/projects/[id]/new-issue/newIssue'
import { issueNameValidationOptions } from '@/lib/validation/issueName'

export interface NewIssueInputs {
	title: string
	description: string
}

interface NewIssueFormProps {
	id: string
}

export default function NewIssueForm({ id }: NewIssueFormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<NewIssueInputs>()
	const router = useRouter()

	const onSubmit = async (data: NewIssueInputs) => {
		setIsLoading(true)
		setError('')

		try {
			const issue = await newIssue(id, data)
			router.refresh()

			const issueId = issue.id

			router.push(`/projects/${id}/issue/${issueId}`)
		} catch (error: any) {
			setError(error.message)
			setIsLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				label="Title"
				error={errors.title?.message}
				{...register('title', { ...issueNameValidationOptions })}
			/>
			<Margin height={10} />
			<Input
				label="Description"
				error={errors.description?.message}
				{...register('description')}
			/>
			<Margin height={10} />
			<Button isLoading={isLoading} type="submit">
				Create
			</Button>
			<Margin height={20} />
			<ErrorAlert>{error}</ErrorAlert>
		</form>
	)
}
