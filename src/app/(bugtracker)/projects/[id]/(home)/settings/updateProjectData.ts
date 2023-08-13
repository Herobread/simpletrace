'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface ProjectDataToUpdate {
	name?: string
	description?: string | null
	open?: number
	closed?: number
}

export default async function updateProject(
	id: string,
	data: ProjectDataToUpdate
) {
	try {
		const projectData = await prisma.project.update({
			where: {
				id,
			},
			data,
		})

		revalidatePath('/projects/[id]')

		return projectData
	} catch (error: any) {
		console.error(error)

		throw new Error('Something went wrong. Try again later.')
	}
}
