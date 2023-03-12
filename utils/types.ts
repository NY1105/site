export type Project = {
	id: number
	title: string
	name: string
	description: string[]
	url: string
	image: string
}

export type Projects = { projects: Project[] }

export type Message = {
	message: string
}

export type RenderContainerChildProps = React.PropsWithChildren<{
	title?: string
	divClassName?: string
	childrenClassName?: string
}>
