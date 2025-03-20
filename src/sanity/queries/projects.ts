import { groq } from "next-sanity";

export const HOME_PROJECTS_QUERY = groq`*[_type == "projects"] | order(_createdAt asc)[0..3] {
    _id,
    title,
    image,
    description,
  }`;

  export const FEATURED_PROJECTS_QUERY = groq`*[_type == "projects" && isFeatured == true] | order(_createdAt asc) {
    _id,
    title,
    image,
    description,
    tags,
  }`;

  export const PROJECTS_QUERY = groq`*[_type == "projects"] | order(orderRank) {
    _id,
    title,
    image,
    description,
    tags,
  }`;

  export const PROJECTS_CAROUSEL_QUERY = groq`*[_type == "projectsCarousel"] | order(orderRank) {
    _id,
    image,
    title,
  }`;
