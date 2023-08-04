import H1 from '@/components/UI/H1/H1'
import AddProjectCard from '@/components/UI/projects/AddProjectCard/AddProjectCard'
import ProjectCard from '@/components/UI/projects/ProjectCard/ProjectCard'
import ProjectsGrid from '@/components/UI/projects/ProjectsGrid/ProjectsGrid'
import Margin from '@/components/layout/Margin/Margin'
import getUserProjects from './getUserProjects'

export default async function Projects() {
	const projects = await getUserProjects()

	return (
		<>
			<Margin height={50} />
			<H1>Your projects</H1>
			<Margin height={30} />

			<ProjectsGrid>
				<AddProjectCard />
				{projects.map((project) => {
					const { description, id, name } = project
					return (
						<ProjectCard
							closed={1}
							open={30}
							description={description || ''}
							header={name}
							id={id}
							key={id}
						/>
					)
				})}
			</ProjectsGrid>
		</>
	)
}
