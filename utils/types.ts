export type Project = {
  id: number
  title: string
  name: string
  description: string[]
  url: string
  image: string
}

export type Experience = {
  id: number
  shortname: string
  title: string
  organization: string
  url: string
  image: string
}

export type Projects = { projects: Project[] }
export type Experiences = { experiences: Experience[] }

// export type Message = {
// 	message: string
// }

export type RenderContainerChildProps = React.PropsWithChildren<{
  title?: string
  divClassName?: string
  childrenClassName?: string
}>

export enum OpenAIModel {
  DAVINCI_TURBO = 'gpt-3.5-turbo',
}

export interface Message {
  role: Role
  content: string
}

export type Role = 'assistant' | 'user'
