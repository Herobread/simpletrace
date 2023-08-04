import H1 from '@/components/UI/H1/H1'
import AddProjectCard from '@/components/UI/projects/AddProjectCard/AddProjectCard'
import ProjectCard from '@/components/UI/projects/ProjectCard/ProjectCard'
import ProjectsGrid from '@/components/UI/projects/ProjectsGrid/ProjectsGrid'
import Margin from '@/components/layout/Margin/Margin'

export default function Projects() {
	return (
		<>
			<Margin height={50} />
			<H1>Your projects</H1>
			<Margin height={30} />

			<ProjectsGrid>
				<AddProjectCard />
				<ProjectCard
					id={'1'}
					header="ABC Corporation"
					description="Simple calculator app with many many bugs and few features."
					open={1}
					closed={6}
				/>
				<ProjectCard
					id={'2'}
					header="Project 2"
					description="This is the second project description."
					open={4}
					closed={1}
				/>
			</ProjectsGrid>
		</>
	)
}
