'use server'

import { prisma } from '@/lib/prisma'

interface UserToUpdate {
	id: string
	username?: string
	password?: string
	firstName?: string
	lastName?: string
	projectsNumber?: number
	[key: string]: any
}

export default async function updateUser(user: UserToUpdate) {
	const { id, firstName, lastName, password, projectsNumber, username } = user
	try {
		await prisma.user.update({
			where: {
				id,
			},
			data: {
				firstName,
				lastName,
				password,
				projectsNumber,
				username,
			},
		})
	} catch (error: any) {
		console.error(error)
		throw new Error(
			'Something went wrong when updating user. Try again later.'
		)
	}
}
