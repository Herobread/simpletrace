import { getServerSession } from 'next-auth'
import getUserInfo from '../../actions/getUserData'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import Protected from '@/components/auth/Protected/Protected'
import Margin from '@/components/layout/Margin/Margin'
import H1 from '@/components/UI/H1/H1'
import SignOutButton from './SignOutButton'

export default async function Profile() {
	const session = await getServerSession(authOptions)

	let user
	if (session) user = await getUserInfo(session?.user.id)

	return (
		<div>
			<Protected redirectTo="auth/login" user="only-authenticated" />
			<Margin height={50} />
			<H1>{user?.username}</H1>
			<Margin height={20} />
			<SignOutButton />
			<Margin height={20} />
			<pre>{JSON.stringify(user)}</pre>
		</div>
	)
}
