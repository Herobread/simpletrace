import s from './Template.module.css'

interface TemplateProps {
	children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
	return <div className={s.container}>{children}</div>
}
