'use client'

import Image from 'next/image'
import s from './InfoAlert.module.css'
import info from '@/../public/icons/Info.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeAnimation } from '@/lib/animations/fade'

interface InfoAlertProps {
	children: React.ReactNode
}

export default function InfoAlert({ children }: InfoAlertProps) {
	return (
		<AnimatePresence>
			{children && (
				<motion.div {...fadeAnimation}>
					<div className={s.container}>
						<Image src={info} alt="" />
						<p className={s.error}>{children}</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
