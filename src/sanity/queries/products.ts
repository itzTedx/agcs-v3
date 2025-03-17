import { groq } from "next-sanity";

export const HOME_PRODUCTS_QUERY = groq`*[_type == "productsCategory"] | order(_createdAt asc)[0..8] {
    _id,
    image,
    category,
    slug,
  }`;
