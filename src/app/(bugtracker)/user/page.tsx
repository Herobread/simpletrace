'use client'

import Button from '@/components/UI/Button/Button'
import Protected from '@/components/auth/Protected/Protected'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

export default function Projects() {
	const { data } = useSession()
	return (
		<div>
			<Protected user="only-authenticated" redirectTo="/auth/login" />

			{JSON.stringify(data)}

			<Button
				onClick={() => {
					signOut()
				}}
			>
				sign out
			</Button>
		</div>
	)
}
