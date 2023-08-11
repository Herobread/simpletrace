import H1 from '@/components/UI/H1/H1'
import ModalBase from '@/components/UI/ModalBase/ModalBase'
import NewIssueForm from '../../../new-issue/NewIssueForm'
import Margin from '@/components/layout/Margin/Margin'

interface ProjectProps {
	params: {
		id: string
	}
}

export default function Page({ params }: ProjectProps) {
	const { id } = params
	return (
		<ModalBase>
			<H1>Open new issue</H1>
			<Margin height={20} />
			<NewIssueForm id={id} />
		</ModalBase>
	)
}
