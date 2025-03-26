import { groq } from "next-sanity";

export const POST_QUERY = groq`*[_type == "posts" && slug.current == $slug][0]{
    title,
    slug,
    excerpt,
    image{
      ...,
      asset->{
        _id,
        url,
        mimeType,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url,
          mimeType,
          metadata {
            lqip,
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    
    _createdAt,
    _updatedAt,
    meta_title,
    meta_description,
    meta_keyword,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
}`;

export const POSTS_QUERY = groq`*[_type == "posts" && defined(slug)] | order(_createdAt desc){
  _id,
  title,
  slug,
  excerpt,
  _createdAt,
  _updatedAt,
  image{
    asset->{
      _id,
      url,
      mimeType,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    },
    alt
  },
}`;
