'use server'

import { prisma } from '@/lib/prisma'
import { RegisterInputs } from './page'

export async function signup(userdata: RegisterInputs) {
	const { password, username } = userdata

	// check if user already exists
	const user = await prisma.user.findFirst({
		where: {
			username,
		},
	})

	if (user) {
		throw new Error(
			'User with this username already exists, try different username.'
		)
	}

	// create user
	await prisma.user.create({
		data: {
			username,
			password,
			firstName: 'Test',
			lastName: 'tset',
		},
	})
}
