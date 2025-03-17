import { groq } from "next-sanity";

export const HOME_SERVICES_QUERY = groq`*[_type == "services"] | order(_createdAt asc)[0..8] {
    _id,
    servicesImage[0],
    servicesTitle,
    servicesSlug,
    servicesDescription,
    servicesSlug,
    metaTagTitle,
    thumbnail
  }`;
