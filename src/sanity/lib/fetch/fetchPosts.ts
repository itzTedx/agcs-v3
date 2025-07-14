import { unstable_cache } from "next/cache";

import { POSTS_QUERYResult, POST_QUERYResult } from "../../../../sanity.types";
import { POSTS_QUERY, POST_QUERY } from "../../queries/posts";
import { sanityFetch } from "../live";
import { getCacheOptions } from "./utils";

export const getPosts = unstable_cache(
  async (): Promise<POSTS_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: POSTS_QUERY,
        tags: ["sanity-content", "posts"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new Error("Failed to fetch posts");
    }
  },
  ["posts"],
  getCacheOptions("posts")
);

export const getPostBySlug = async (
  slug: string
): Promise<POST_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: POST_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    throw new Error("Failed to fetch post by slug");
  }
};
