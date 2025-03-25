import { groq } from "next-sanity";

export const GALLERY_QUERY = groq`*[_type == "gallery"] |  order(orderRank)  {
    _id,
    image,
    title
  }`;
