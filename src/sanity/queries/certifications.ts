import { groq } from "next-sanity";

export const CERTIFICASTES_QUERY = groq`*[_type == "certifications"] | order(_createdAt asc) {
    _id,
    title,
    image,
    "certificate": certificate.asset->url,
  }`;
