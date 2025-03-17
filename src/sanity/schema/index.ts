import { type SchemaTypeDefinition } from 'sanity'
import certifications from './certifications'
import products from './products'
import productsCategory from './products-category'
import projects from './projects'
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
  ],
}
