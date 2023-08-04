'use server'

import { prisma } from '@/lib/prisma'
import { CreateNewProjectInputs } from './CreateNewProjectForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function createProject(data: CreateNewProjectInputs) {
	const { name, description } = data

	if (!name) {
		throw new Error('Project must have a name.')
	}

	const session = await getServerSession(authOptions)

	if (!session) {
		throw new Error('Unathorised.')
	}

	try {
		const project = await prisma.project.create({
			data: {
				name,
				description,
				users: {
					connect: { id: session?.user.id },
				},
			},
		})

		return project
	} catch (error: any) {
		console.error(error)
		throw new Error('Something went wrong, try again later.')
	}
}
