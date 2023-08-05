'use server'

import { prisma } from '@/lib/prisma'

interface NewIssueProps {
	description?: string | null
	title: string
}

export default async function newIssue(projectId: string, data: NewIssueProps) {
	const { description, title } = data

	if (!title) {
		throw new Error('Title not specified.')
	}

	if (!projectId) {
		throw new Error('Project Id not specified.')
	}

	try {
		await prisma.issue.create({
			data: {
				title,
				description,
				project: {
					connect: {
						id: projectId,
					},
				},
			},
		})
	} catch (error: any) {
		console.error(error)

		throw new Error(JSON.stringify(error))
		throw new Error('Something went wrong, try again later.')
	}
}
