import { client } from './sanity'

// Fetch all posts
export async function getPosts() {
  const query = `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    image,
    body
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Fetch a single post by slug
export async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    publishedAt,
    image,
    body
  }`
  return await client.fetch(query, { slug })
}

// Fetch all projects
export async function getProjects() {
  const query = `*[_type == "project" && !(_id in path("drafts.**"))] | order(order asc, completedAt desc) {
    _id,
    title,
    slug,
    client,
    categories,
    excerpt,
    description,
    mainImage,
    gallery,
    projectUrl,
    technologies,
    completedAt,
    featured,
    order
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Fetch featured projects
export async function getFeaturedProjects() {
  const query = `*[_type == "project" && featured == true && !(_id in path("drafts.**"))] | order(order asc, completedAt desc) {
    _id,
    title,
    slug,
    client,
    categories,
    mainImage,
    projectUrl,
    technologies,
    completedAt,
    order
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }
}

// Fetch a single project by slug
export async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    client,
    industry,
    subheading,
    categories,
    excerpt,
    description,
    mainImage,
    gallery,
    projectUrl,
    technologies,
    completedAt,
    featured
  }`
  return await client.fetch(query, { slug })
}

// Fetch featured testimonials
export async function getFeaturedTestimonials() {
  const query = `*[_type == "testimonial" && featured == true && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    quote,
    author,
    role,
    image,
    logo,
    project->{
      _id,
      title,
      slug
    }
  }`
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

