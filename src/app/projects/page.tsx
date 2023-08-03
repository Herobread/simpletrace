'use client'

import { useSession } from 'next-auth/react'

export default function Projects() {
	const { data } = useSession()
	return <div>{JSON.stringify(data)}</div>
}
