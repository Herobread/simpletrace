import s from './Paragraph.module.css'

interface ParagraphProps {
	children: React.ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
	if (!children) return null

	return <p className={s.paragraph}>{children}</p>
}
