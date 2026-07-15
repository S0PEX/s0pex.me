export interface TimelineBulletPart {
  text: string
  strong?: boolean
  italic?: boolean
  link?: string
}

export type TimelineBullet = TimelineBulletPart[]

export interface TimelineEntryContent {
  title: string
  subTitle?: string
  dateFrom: string
  dateTo?: string
  bullets: TimelineBullet[]
}

export interface TimelineContent {
  experience: TimelineEntryContent[]
  internships: TimelineEntryContent[]
  education: TimelineEntryContent[]
}

export interface ProjectEntryContent {
  slug: string
  heading: string
  subTitle?: string
  dateFrom: string
  dateTo?: string
  bullets: TimelineBullet[]
  details: string[]
  skills: string[]
}

export interface ProjectsContent {
  commercial: ProjectEntryContent[]
  nonCommercial: ProjectEntryContent[]
}

export interface SiteContent {
  meta: { description: string }
  timeline: TimelineContent
  projects: ProjectsContent
}
