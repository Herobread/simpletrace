import s from './CompactNavBar.module.css'

export default function CompactNavBar() {
	return (
		<div className={s.container}>
			<div className={s.logo}>
				<span className={s.bold}>Simple</span>
				Trace
			</div>
		</div>
	)
}
