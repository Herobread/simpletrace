'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Home() {
	return (
		<main>
			Landing page
			<Link href={'/auth/login'}>Login</Link>
			<button
				onClick={() => {
					signOut()
				}}
			>
				sign out
			</button>
		</main>
	)
}
