import NavBar from '@/components/UI/NavBar/NavBar'
import Protected from '@/components/auth/Protected/Protected'
import MainLayout from '@/components/layout/MainLayout/MainLayout'
import Margin from '@/components/layout/Margin/Margin'
import React from 'react'

export default function BugtrackerLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<NavBar />
			<Protected redirectTo="/auth/login" user="only-authenticated" />
			<MainLayout>{children}</MainLayout>
			<Margin height={40} />
		</>
	)
}
