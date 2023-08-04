'use server'

import Spinner from '@/components/UI/Spinner/Spinner'
import Margin from '@/components/layout/Margin/Margin'
import { Suspense } from 'react'
import GenerateProjectHeader from './GenerateProjectHeader'
import Button from '@/components/UI/Button/Button'

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
			<Margin height={50} />
			<Button variant="accent">Add issue</Button>
			<Button variant="accent" disabled>
				Add issue
			</Button>
			<Button variant="accent" isLoading={true}>
				Add issue
			</Button>
			<Margin height={50} />

			<Button>Add issue</Button>
			<Button disabled>Add issue</Button>
			<Button isLoading={true}>Add issue</Button>
		</div>
	)
}
