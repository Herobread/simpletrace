import Protected from '@/components/auth/Protected/Protected'

interface ProjectsLayoutProps {
	children: React.ReactNode
	modal: React.ReactNode
}

export default function ProjectsLayout({
	children,
	modal,
}: ProjectsLayoutProps) {
	return (
		<>
			<Protected redirectTo="/auth/login" user="only-authenticated" />
			{modal}
			{children}
		</>
	)
}
