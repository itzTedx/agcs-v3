import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./blocks/block-content";
import certifications from "./certifications";
import gallery from "./gallery";
import posts from "./posts";
import products from "./products";
import productsCategory from "./products-category";
import projects from "./projects";
import projectsCarousel from "./projects-carousel";
import services from "./services";
import servicesCategory from "./services-category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
     // shared objects
     blockContent,
    // documents
    services,
    servicesCategory,
    products,
    productsCategory,
    certifications,
    projects,
    projectsCarousel,
    gallery,
    posts
  ],
};
