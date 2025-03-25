import { groq } from "next-sanity";

export const HOME_SERVICES_QUERY = groq`*[_type == "servicesCategory"] | order(orderRank)[0..8] {
    _id,
    image,
    category,
    description,
    file,
    slug,
    thumbnail,
    _createdAt
  }`;

  export const SERVICES_CATEOGORIES_QUERY = groq`*[_type == "servicesCategory"] | order(orderRank) {
    _id,
    image,
    category,
    description,
    file,
    slug,
    thumbnail,
    _createdAt
  }`;

  export const SERVICES_BY_CATEOGORY_QUERY =  groq`*[_type == "services" && category._ref in *[_type=='servicesCategory' && slug.current == $slug]._id] | order(_createdAt asc){
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
  }`;

  export const SERVICE_QUERY = groq`*[_type == "services" && servicesSlug.current == $slug][0] {
   _id,
    servicesTitle,
    servicesDescription,
    category,
    servicesImage,
    file,
    servicesSlug,
    metaTagTitle,
    metaTagKeyword,
    thumbnail,
    relatedProducts[]->{
        _id,
        title,
        slug,
        thumbnail,
      }
    }`;
    // "products": *[ _type == "services" && relatedProducts._ref in *[_type=='products' && ^._id]._id] 