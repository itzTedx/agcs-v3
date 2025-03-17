import { groq } from "next-sanity";

export const HOME_PROJECTS_QUERY = groq`*[_type == "projects"] | order(_createdAt asc)[0..3] {
    _id,
    title,
    image,
    description,
  }`;
