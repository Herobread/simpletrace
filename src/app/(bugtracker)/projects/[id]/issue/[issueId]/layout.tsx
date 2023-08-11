import Margin from '@/components/layout/Margin/Margin'

interface IssueLayout {
	children: React.ReactNode
}

export default function IssueLayout({ children }: IssueLayout) {
	return (
		<>
			<Margin height={50} />
			{children}
		</>
	)
}
