import H1 from '@/components/UI/H1/H1'
import Margin from '@/components/layout/Margin/Margin'
import NewIssueForm from './NewIssueForm'

export default function NewIssue({ params }: { params: { id: string } }) {
	const { id } = params
	//  todo: validate that project exists
	return (
		<div>
			<Margin height={50} />
			<H1>Open new issue</H1>
			<Margin height={20} />
			<NewIssueForm id={id} />
		</div>
	)
}
