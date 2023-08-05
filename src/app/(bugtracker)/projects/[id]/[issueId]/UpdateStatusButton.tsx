'use client'

import Button from '@/components/UI/Button/Button'
import updateIssue from './updateIssue'
import { useState } from 'react'

interface UpdateStatusButtonProps {
	issueId: string
	isOpen: boolean
}

export default function UpdateStatusButton({
	isOpen,
	issueId,
}: UpdateStatusButtonProps) {
	const [isLoading, setisLoading] = useState(false)

	const onClick = async () => {
		setisLoading(true)
		try {
			await updateIssue(issueId, { isOpen: !isOpen })
		} catch (error: any) {}
		setisLoading(false)
	}

	return (
		<Button isLoading={isLoading} onClick={onClick}>
			update
		</Button>
	)
}
