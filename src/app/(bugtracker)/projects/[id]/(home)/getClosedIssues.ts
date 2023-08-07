'use server'

import { prisma } from '@/lib/prisma'

export default async function getClosedIssues(id: string) {
	if (!id) {
		throw new Error(`Id wasn't specified`)
	}

	const openIssues = await prisma.issue.findMany({
		where: {
			isOpen: false,
			projectId: id,
		},
	})

	return openIssues
}
