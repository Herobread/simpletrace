import NavBar from '@/components/UI/NavBar/NavBar'
import MainLayout from '@/components/layout/MainLayout/MainLayout'
import React from 'react'

export default function BugtrackerLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<NavBar />
			<MainLayout>{children}</MainLayout>
		</>
	)
}
