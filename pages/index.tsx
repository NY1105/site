import RenderProjects from '@/components/RenderProjects'
import RenderIntro from '@/components/RenderIntro'
import RenderEducation from '@/components/RenderEducation'
import RenderExperience from '@/components/RenderExperience'

export default function Home() {
	return (
		<div className="">
			<div className="md:flex">
				<RenderIntro />
				<RenderProjects />
			</div>
			<div className="">
				<div className="sm:grid sm:grid-cols-2">
					<RenderExperience />
					<RenderEducation />
				</div>
			</div>
		</div>
	)
}
