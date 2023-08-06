import s from './CompactNavBar.module.css'
import Link from 'next/link'

export default function CompactNavBar() {
	return (
		<div className={s.container}>
			<Link href={'/'}>
				<div className={s.logo}>
					<span className={s.bold}>Simple</span>
					Trace
				</div>
			</Link>
		</div>
	)
}
