import Image from 'next/image'
import s from './MainLandingLayout.module.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface MainLandingLayoutProps {
	image: string | StaticImport
	children: React.ReactNode
}

export default function MainLandingLayout({
	image,
	children,
}: MainLandingLayoutProps) {
	return (
		<div className={s.container}>
			<Image src={image} alt="" className={s.image} />
			<div className={s.contentCenterWrapper}>
				<div className={s.contentContainer}>{children}</div>
			</div>
		</div>
	)
}
