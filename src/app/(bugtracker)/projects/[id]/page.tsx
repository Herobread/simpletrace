'use server'

import Spinner from '@/components/UI/Spinner/Spinner'
import Margin from '@/components/layout/Margin/Margin'
import { Suspense } from 'react'
import GenerateProjectHeader from './GenerateProjectHeader'

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
		</div>
	)
}
