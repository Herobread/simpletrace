'use client'

import Image from 'next/image'
import s from './ErrorAlert.module.css'
import danger from '@/../public/icons/Danger.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeAnimation } from '@/lib/animations/fade'

interface ErrorAlertProps {
	children: React.ReactNode
}

export default function ErrorAlert({ children }: ErrorAlertProps) {
	return (
		<AnimatePresence>
			{children && (
				<motion.div {...fadeAnimation}>
					<div className={s.container}>
						<Image src={danger} alt="" />
						<p className={s.error}>{children}</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
