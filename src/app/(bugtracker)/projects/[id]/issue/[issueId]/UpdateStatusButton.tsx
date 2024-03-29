'use client'

import Button from '@/components/UI/Button/Button'
import updateIssue from './updateIssue'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface UpdateStatusButtonProps {
	issueId: string
	isOpen: boolean
	projectId: string
}

export default function UpdateStatusButton({
	projectId,
	isOpen,
	issueId,
}: UpdateStatusButtonProps) {
	const [isLoading, setisLoading] = useState(false)
	const router = useRouter()

	const onClick = async () => {
		setisLoading(true)
		try {
			await updateIssue(issueId, { isOpen: !isOpen })
			router.push(`/projects/${projectId}`)
			router.refresh()
		} catch (error: any) {}
		setisLoading(false)
	}

	return (
		<Button isLoading={isLoading} onClick={onClick}>
			{isOpen ? 'Close issue' : 'Re-open'}
		</Button>
	)
}
