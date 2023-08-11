import ModalBase from '@/components/UI/ModalBase/ModalBase'
import IssueView from '../../../../issue/[issueId]/page'

interface IssueViewProps {
	params: {
		id: string
		issueId: string
	}
}

export default function Page({ params }: IssueViewProps) {
	return (
		<ModalBase>
			<IssueView params={params} />
		</ModalBase>
	)
}
