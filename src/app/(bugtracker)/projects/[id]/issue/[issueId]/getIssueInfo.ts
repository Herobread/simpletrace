'use server'

import { prisma } from '@/lib/prisma'

export default async function getIssueInfo(id: string) {
	if (!id) {
		throw new Error('Issue id not specified.')
	}

	try {
		const data = await prisma.issue.findUnique({
			where: {
				id,
			},
		})

		return data
	} catch (error: any) {
		console.error(error)

		throw new Error('Something went wrong, try again later')
	}
}
