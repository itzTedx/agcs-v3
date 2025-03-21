import { groq } from "next-sanity";

export const HOME_PRODUCTS_QUERY = groq`*[_type == "productsCategory"] | order(_createdAt asc)[0..8] {
    _id,
    image,
    category,
    slug,
  }`;
export const PRODUCT_QUERY = groq`*[_type == "products" && slug.current == $slug][0] {
    _id,
    title,
    description,
    image,
    slug,
    metaTagTitle,
    metaTagKeywords,
    body
  }`;

export const PRODUCTS_CATEGORIES_QUERY = groq`*[_type == "productsCategory"]{
    _id,
    slug,
    image,
    description,
    category,
  }`;

export const PRODUCTS_BY_CATEGORY_QUERY = groq`*[_type == "products" && category._ref in *[_type=='productsCategory' && slug.current == $slug]._id] | order(_createdAt asc){
    _id,
    title,
    slug,
    thumbnail
}`;

export const PRODUCTS_CATEGORY_BY_CATEGORY_QUERY = groq`*[_type == "productsCategory" && slug.current == $slug][0]{
    _id,
    category,
    description,
    "brochure": file.asset->url,
  }`;
