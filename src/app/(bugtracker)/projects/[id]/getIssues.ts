'use server'

import { prisma } from '@/lib/prisma'

export default async function getIssues(projectId: string, isOpen = true) {
	if (!projectId) {
		throw new Error(`Id wasn't specified`)
	}

	const openIssues = await prisma.issue.findMany({
		where: {
			isOpen,
			projectId,
		},
	})

	return openIssues
}
