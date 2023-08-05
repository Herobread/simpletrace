'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export interface Issue {
	createdAt?: Date
	title?: string
	description?: string | null
	isOpen?: boolean
	projectId?: string
}

export default async function updateIssue(id: string, data: Issue) {
	try {
		await prisma.issue.update({
			data,
			where: {
				id,
			},
		})

		revalidatePath('/projects/[id]')

		return
	} catch (error: any) {
		console.error(error)

		throw new Error('Something went wrong, try again later.')
	}
}
