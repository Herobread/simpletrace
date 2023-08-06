import getUserInfo from '@/app/actions/getUserData'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Skeleton from 'react-loading-skeleton'

export default async function GetUserName() {
	// const session = await getServerSession(authOptions)

	const user = await getUserInfo('asad')

	return <>fjdsk</>
	// const id = session?.user.id
	// if (!id) return
	// console.log(user)
	// return <div>{JSON.stringify(session)}</div>
}
