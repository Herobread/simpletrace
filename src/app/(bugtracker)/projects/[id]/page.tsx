'use server'

import Spinner from '@/components/UI/Spinner/Spinner'
import Margin from '@/components/layout/Margin/Margin'
import { Suspense } from 'react'
import GenerateProjectHeader from './GenerateProjectHeader'
import Button from '@/components/UI/Button/Button'
import H2 from '@/components/UI/H2/H2'

interface ProjectProps {
	params: {
		id: string
	}
}

export default async function Project({ params }: ProjectProps) {
	const { id } = params

	return (
		<div>
			<Margin height={50} />
			<Suspense fallback={<Spinner color="black" />}>
				<GenerateProjectHeader id={id} />
			</Suspense>
			<Margin height={30} />
			<H2>Issues</H2>
			<Margin height={30} />
			<H2>Closed issues</H2>
		</div>
	)
}
