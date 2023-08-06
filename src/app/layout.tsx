import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'SimpleTrace',
	description: 'bugtracker',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
