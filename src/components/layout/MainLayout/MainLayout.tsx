import s from './MainLayout.module.css'

interface MainLayoutProps {
	children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
	return <div className={s.container}>{children}</div>
}
