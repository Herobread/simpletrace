import ModalBase from '@/components/UI/ModalBase/ModalBase'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<ModalBase>{children}</ModalBase>
		</>
	)
}
