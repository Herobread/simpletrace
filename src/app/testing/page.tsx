'use client'

import Button from '@/components/UI/Button/Button'
import H2 from '@/components/UI/H2/H2'
import ModalBase from '@/components/UI/ModalBase/ModalBase'
import { useState } from 'react'

export default function Testing() {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<ModalBase
				isOpen={open}
				onClose={() => {
					setOpen(false)
				}}
			>
				<H2>New issue</H2>
			</ModalBase>
			<Button
				onClick={() => {
					setOpen(true)
				}}
			>
				Open
			</Button>
		</div>
	)
}
