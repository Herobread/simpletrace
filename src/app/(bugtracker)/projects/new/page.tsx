import H1 from '@/components/UI/H1/H1'
import Margin from '@/components/layout/Margin/Margin'
import React from 'react'
import CreateNewProjectForm from './CreateNewProjectForm'

export default function NewProject() {
	return (
		<>
			<Margin height={50} />
			<H1>Create new project</H1>
			<Margin height={20} />

			<CreateNewProjectForm />
		</>
	)
}
