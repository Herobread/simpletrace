import H1 from '@/components/UI/H1/H1'
import Paragraph from '@/components/UI/Paragraph/Paragraph'
import Margin from '@/components/layout/Margin/Margin'
import MainLayout from '@/components/layout/MainLayout/MainLayout'
import NavBar from '@/components/UI/NavBar/NavBar'
import Link from 'next/link'
import H2 from '@/components/UI/H2/H2'
import MainLandingLayout from '@/components/layout/MainLandingLayout/MainLandingLayout'
import curve from '@/../public/curve.png'
import Button from '@/components/UI/Button/Button'
import CompactNavBar from '@/components/UI/CompactNavBar/CompactNavBar'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
	const session = await getServerSession(authOptions)

	return (
		<main>
			<CompactNavBar />
			<MainLandingLayout image={curve}>
				<H1>Simple way to track issues</H1>
				<Margin height={20} />
				<Paragraph>
					Effortlessly manage your projects and stay on top of every
					issue.
				</Paragraph>
				<Margin height={20} />
				{session ? (
					<Link href="/projects">
						<Button variant="accent">Projects</Button>
					</Link>
				) : (
					<Link href="/auth/register">
						<Button variant="accent">Sign up</Button>
					</Link>
				)}
			</MainLandingLayout>
		</main>
	)
}
