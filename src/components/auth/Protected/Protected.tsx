'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Spinner from '@/components/UI/Spinner/Spinner'

interface ProtectedProps {
	user: 'only-unauthenticated' | 'only-authenticated'
	redirectTo: string
}

export default function Protected({ user, redirectTo }: ProtectedProps) {
	const { data: session, status } = useSession()
	const isAuthenticated = !!session

	if (status == 'loading') {
		return null
	}

	if (!isAuthenticated && user == 'only-authenticated') {
		redirect(redirectTo)
	}

	if (isAuthenticated && user == 'only-unauthenticated') {
		redirect(redirectTo)
	}

	return null
}
