'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { SessionProvider } from 'next-auth/react'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<SessionProvider>
			<SkeletonTheme borderRadius={20}>
				<ProgressBar
					delay={200}
					height="2px"
					color="#7E52F7"
					options={{ showSpinner: false }}
					shallowRouting
				/>
				{children}
			</SkeletonTheme>
		</SessionProvider>
	)
}
