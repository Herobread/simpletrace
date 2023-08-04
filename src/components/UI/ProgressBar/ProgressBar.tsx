import s from './ProgressBar.module.css'

interface ProgressBarProps extends React.HTMLProps<HTMLProgressElement> {}

export default function ProgressBar({ ...props }: ProgressBarProps) {
	return <progress className={s.progressBar} {...props} />
}
