import Link from 'next/link'
import s from './NavBar.module.css'
import { getServerSession } from 'next-auth'
import getUserInfo from '@/app/actions/getUserData'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Button from '../Button/Button'

export default async function NavBar() {
	const session = await getServerSession(authOptions)

	let data
	if (session) data = await getUserInfo(session.user.id)

	return (
		<div className={s.container}>
			<Link href="/">
				<div className={s.logo}>
					<span className={s.bold}>Simple</span>
					Trace
				</div>
			</Link>
			<div className={s.right}>
				<Link href="/projects">Projects</Link>
				{session ? (
					<Link href="/profile">{data?.username}</Link>
				) : (
					<Link href="/auth/login">
						<Button>Login</Button>
					</Link>
				)}
			</div>
		</div>
	)
}
