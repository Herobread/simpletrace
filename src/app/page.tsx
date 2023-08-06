import H1 from '@/components/UI/H1/H1'
import Paragraph from '@/components/UI/Paragraph/Paragraph'
import Margin from '@/components/layout/Margin/Margin'
import MainLayout from '@/components/layout/MainLayout/MainLayout'
import NavBar from '@/components/UI/NavBar/NavBar'
import Link from 'next/link'
import H2 from '@/components/UI/H2/H2'

export default function Home() {
	return (
		<main>
			<NavBar />
			<MainLayout>
				<Margin height={50} />
				<H1>This will be landing page</H1>
				<Margin height={16} />
				<Paragraph>
					but I havent made design yet, so there are some links:
				</Paragraph>
				<Margin height={20} />
				<ul>
					<li>
						<Link href="/auth/login">Login</Link>
					</li>
					<Margin height={10} />
					<li>
						<Link href="/auth/register">Register</Link>
					</li>
					<Margin height={10} />
					<li>
						<Link href="/projects">Projects</Link>
					</li>
				</ul>
				<Margin height={30} />
				<H2>SimpleTrace</H2>
				<Margin height={16} />
				<Paragraph>
					Introducing SimpleTrace! It&apos;s a cool bug tracker
					that&apos;s super easy to use. With SimpleTrace, you can
					tell the computer about any problems you find when
					you&apos;re playing games or using apps. It has a neat and
					simple design, so you don&apos;t get confused. You can see
					all the bugs in one place and know if they&apos;re getting
					fixed. It&apos;s like having a secret bug detective helping
					you and your friends make everything work better!
				</Paragraph>
			</MainLayout>
		</main>
	)
}
