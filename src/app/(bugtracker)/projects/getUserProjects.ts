import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'

export default async function getUserProjects() {
	const session = await getServerSession(authOptions)

	const id = session?.user.id

	if (!id) {
		throw new Error('Unauthorised')
	}

	try {
		const projects = await prisma.project.findMany({
			where: {
				users: {
					some: {
						id,
					},
				},
			},
			include: {
				issues: true,
			},
		})

		const formattedData = projects.map((project) => {
			const openIssues = project.issues.filter(
				(issue) => issue.isOpen
			).length
			const closedIssues = project.issues.filter(
				(issue) => !issue.isOpen
			).length

			return {
				id: project.id,
				name: project.name,
				description: project.description,
				totalOpenIssues: openIssues,
				totalClosedIssues: closedIssues,
			}
		})

		return formattedData
	} catch (error: any) {
		throw new Error('There was an error loading projects. Try again later.')
	}
}
