import s from './DetailedIssueInfo.module.css'

interface DetailedIssueInfoProps {
	header: string
	status: boolean
	assignee?: string
	openedBy?: string
}

export default function DetailedIssueInfo({}: DetailedIssueInfoProps) {
	return <div className={s.container}></div>
}
