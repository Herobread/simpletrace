import Link from 'next/link'

export default function Home() {
	return (
		<main>
			Landing page
			<Link href={'/auth/login'}>Login</Link>
		</main>
	)
}
