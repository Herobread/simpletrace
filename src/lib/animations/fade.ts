import { AnimationProps } from 'framer-motion'

export const fadeAnimation: AnimationProps = {
	initial: { opacity: 0, height: 0 },
	animate: { opacity: 1, height: 'auto' },
	exit: { opacity: 0, height: 0 },
	transition: { duration: 0.3 },
}
