import Link from 'next/link'
import s from './NavBar.module.css'

export default function NavBar() {
	return (
		<>
			<div className={s.container}>
				<Link href="/">
					<div className={s.logo}>
						<span className={s.bold}>Simple</span>
						Trace
					</div>
				</Link>
				<div className={s.right}>John smith</div>
			</div>
		</>
	)
}
