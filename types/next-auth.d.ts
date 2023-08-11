import { Prisma } from '@prisma/client'
import NextAuth from 'next-auth'

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			id: string
			firstName: string
			lastName: string
			username: string
			password: string
			projectsNumber: number
			// accounts: Account[]
			// UserProject: UserProject[]
		}
	}
}
