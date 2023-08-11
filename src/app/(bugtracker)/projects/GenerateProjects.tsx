import ProjectCard from '@/components/UI/projects/ProjectCard/ProjectCard'
import getUserProjects from './getUserProjects'

export default async function GenerateProjects() {
	const projects = await getUserProjects()

	return (
		<>
			{projects.map((project) => {
				const {
					description,
					id,
					name,
					totalClosedIssues,
					totalOpenIssues,
				} = project
				return (
					<ProjectCard
						closed={totalClosedIssues}
						open={totalOpenIssues}
						description={description || ''}
						header={name}
						id={id}
						key={id}
					/>
				)
			})}
		</>
	)
}
