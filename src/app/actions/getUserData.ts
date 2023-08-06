'use server'

import { prisma } from '@/lib/prisma'

export default async function getUserInfo(id: string) {
	if (!id) throw new Error('Id not specified')

	try {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		})

		return user
	} catch (error: any) {
		console.error(error)
		throw new Error('Something went wrong. Try again later.')
	}
}
