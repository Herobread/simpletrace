'use client'

import { useRouter } from 'next/navigation'
import s from './ModalBase.module.css'

interface ModalBaseProps {
	children: React.ReactNode
}

export default function ModalBase({ children }: ModalBaseProps) {
	const router = useRouter()

	const goBack = async () => {
		router.back()
	}

	const handleModalContentClick = (e: React.MouseEvent) => {
		e.stopPropagation() // Prevent the click event from bubbling up
	}

	return (
		<div className={s.wrapper} onClick={goBack}>
			<div className={s.modal} onClick={handleModalContentClick}>
				<div className={s.modalContent}>{children}</div>
			</div>
		</div>
	)
}
