import { type SchemaTypeDefinition } from 'sanity'
import certifications from './certifications'
import post from './post'
import products from './products'
import productsCategory from './products-category'
import projects from './projects'
import projectsCarousel from './projects-carousel'
import services from './services'
import servicesCategory from './services-category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    services,
    servicesCategory,
    products,
    productsCategory,
    certifications,
    projects,
    projectsCarousel,
    post
  ],
}
