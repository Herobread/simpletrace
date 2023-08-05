import s from './IssueContainer.module.css'

interface IssueContainerProps {
	children: React.ReactNode
}

export default function IssueContainer({ children }: IssueContainerProps) {
	return <div className={s.container}>{children}</div>
}
