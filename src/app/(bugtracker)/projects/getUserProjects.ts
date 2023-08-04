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

		return projects
	} catch (error: any) {
		throw new Error('There was an error loading projects. Try again later.')
	}
}
