'use client'

import { SessionProvider } from 'next-auth/react'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<SkeletonTheme borderRadius={20}>{children}</SkeletonTheme>
		</SessionProvider>
	)
}
