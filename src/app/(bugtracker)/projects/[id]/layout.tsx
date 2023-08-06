import Protected from '@/components/auth/Protected/Protected'

interface ProjectsLayoutProps {
	children: React.ReactNode
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
	return (
		<>
			<Protected redirectTo="/auth/login" user="only-authenticated" />
			{children}
		</>
	)
}
