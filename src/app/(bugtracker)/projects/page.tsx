import H1 from '@/components/UI/H1/H1'
import AddProjectCard from '@/components/UI/projects/AddProjectCard/AddProjectCard'
import ProjectsGrid from '@/components/UI/projects/ProjectsGrid/ProjectsGrid'
import Margin from '@/components/layout/Margin/Margin'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import GenerateProjects from './GenerateProjects'
import { Suspense } from 'react'
import ProjectCardSkeleton from '@/components/UI/projects/ProjectCard/ProjectCardSkeleton/ProjectCardSkeleton'

export default async function Projects() {
	const session = await getServerSession(authOptions)
	const projectsNumber = session?.user.projectsNumber || 0

	return (
		<>
			<Margin height={50} />
			<H1>Your projects</H1>
			<Margin height={30} />
			<ProjectsGrid>
				<AddProjectCard />
				<Suspense
					fallback={<ProjectCardSkeleton count={projectsNumber} />}
				>
					<GenerateProjects />
				</Suspense>
			</ProjectsGrid>
		</>
	)
}
