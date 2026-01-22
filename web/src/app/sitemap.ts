import { MetadataRoute } from 'next'
import { getProjects } from '@/lib/queries'
import { siteUrl } from '@/lib/config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteUrl
  
  // Get all projects for dynamic routes
  const projects = await getProjects()
  
  // Static routes
  const routes = [
    '',
    '/prosjekter',
    '/tjenester',
    '/om-meg',
    '/kontakt',
    '/personvern',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic project routes
  const projectRoutes = projects.map((project: any) => ({
    url: `${baseUrl}/prosjekter/${project.slug?.current}`,
    lastModified: project.completedAt ? new Date(project.completedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...projectRoutes]
}

