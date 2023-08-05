'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export default async function getProjectData(id: string) {
	if (!id) {
		throw new Error(`Id wasn't specified`)
	}

	const openIssues = await prisma.issue.count({
		where: {
			isOpen: true,
			projectId: id,
		},
	})

	const closedIssues = await prisma.issue.count({
		where: {
			isOpen: false,
			projectId: id,
		},
	})

	const projectData = await prisma.project.findUnique({
		where: {
			id,
		},
	})

	if (!projectData) {
		throw new Error(`Project with id ${id} not found.`)
	}

	revalidatePath('/')
	revalidatePath('/projects/*')

	return {
		open: openIssues,
		closed: closedIssues,
		...projectData,
	}
}
