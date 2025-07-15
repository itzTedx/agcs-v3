import { groq } from "next-sanity";

export const HOME_SERVICES_QUERY = groq`*[_type == "servicesCategory"] | order(orderRank)[0..8] {
  _id,
  category,
  description,
  slug,
  thumbnail,
  _updatedAt,
  "relatedServices": *[_type == "services" && category._ref == ^._id][0..5] {
    _id,
    servicesTitle,
    servicesSlug,
    thumbnail
  }
}`;

export const SERVICES_CATEOGORIES_QUERY = groq`*[_type == "servicesCategory"] | order(orderRank) {
    _id,
    image,
    category,
    description,
    file,
    slug,
    thumbnail,
    _updatedAt
  }`;

export const SERVICES_BY_CATEOGORY_QUERY = groq`*[_type == "services" && category._ref in *[_type=='servicesCategory' && slug.current == $slug]._id] | order(_createdAt asc){
    _id,
    servicesTitle,
    servicesDescription,
    category,
    servicesImage,
    file,
    servicesSlug,
    metaTagTitle,
    metaTagKeyword,
    thumbnail
  }`;

export const SERVICES_CATEGORY_BY_CATEGORY_QUERY = groq`*[_type == "servicesCategory" && slug.current == $slug][0]{
     _id,
    category,
    description,
    slug,
  }`;

export const SERVICE_QUERY = groq`*[_type == "services" && servicesSlug.current == $slug][0] {
   _id,
   servicesImage,
    servicesTitle,
    servicesDescription,
    category,
    file,
    servicesSlug,
    metaTagTitle,
    metaTagKeyword,
    metaTagDescription,
    thumbnail,
    relatedProducts[]->{
        _id,
        title,
        slug,
        thumbnail,
        category->{
          slug
        }
      },
    "relatedServices": *[_type == "services" && category._ref == ^.category._ref && _id != ^._id][0..7] {
      _id,
      servicesTitle,
      servicesSlug,
      thumbnail
    }
    }`;
