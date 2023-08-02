import Image from 'next/image'
import s from './layout.module.css'
import loginArt from '@/../public/dog.png'

interface AuthLayoutProps {
	children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className={s.container}>
			<Image
				src={loginArt}
				alt=""
				className={s.image}
				draggable="false"
			/>
			<div className={s.formContainer}>{children}</div>
		</div>
	)
}
