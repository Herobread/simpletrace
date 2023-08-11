import getUserInfo from '@/app/actions/getUserData'
import { prisma } from '@/lib/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			credentials: {
				username: {
					label: 'Username',
				},
				password: { label: 'Password' },
			},
			async authorize(credentials, req) {
				if (!credentials) {
					throw new Error('Credentials not provided')
				}

				const { username, password } = credentials

				const user = await prisma.user.findUnique({
					where: {
						username,
						password,
					},
				})

				if (user) {
					return user
				} else {
					throw new Error('Incorrect username or password.')
				}
			},
		}),
	],
	pages: {
		signIn: 'auth/login',
	},
	session: {
		strategy: 'jwt',
	},
	jwt: {
		maxAge: 30 * 24 * 30 * 60,
	},
	callbacks: {
		// update values, that are returned by useSession()
		async session({ session, token }) {
			if (!token) return session

			session.user.id = token.sub || ''
			const userData = await getUserInfo(session.user.id)

			if (!userData) return session

			const updatedUser = {
				id: userData.id || '',
				firstName: userData.firstName || '',
				lastName: userData.lastName || '',
				username: userData.username || '',
				password: userData.password || '',
				projectsNumber: userData.projectsNumber || 0,
			}

			session.user = { ...updatedUser }

			return { ...session, user: { ...updatedUser } }
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
