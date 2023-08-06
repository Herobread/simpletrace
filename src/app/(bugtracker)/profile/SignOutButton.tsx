'use client'

import Button from '@/components/UI/Button/Button'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
	return (
		<Button
			onClick={() => {
				signOut()
			}}
		>
			Sign out
		</Button>
	)
}
