import Image from 'next/image'
import s from './Error.module.css'
import danger from '@/../public/icons/Danger.svg'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeAnimation } from '@/lib/animations/fade'

interface ErrorProps {
	children: React.ReactNode
}

export default function Error({ children }: ErrorProps) {
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
