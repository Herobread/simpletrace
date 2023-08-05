'use server'

import { prisma } from '@/lib/prisma'

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

	return {
		open: openIssues,
		closed: closedIssues,
		...projectData,
	}
}
