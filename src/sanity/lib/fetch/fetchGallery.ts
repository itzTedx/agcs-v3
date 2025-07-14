import { unstable_cache } from "next/cache";

import { GALLERY_QUERYResult } from "../../../../sanity.types";
import { GALLERY_QUERY } from "../../queries/gallery";
import { sanityFetch } from "../live";
import { getCacheOptions } from "./utils";

export const getGalleries = unstable_cache(
  async (): Promise<GALLERY_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: GALLERY_QUERY,
        tags: ["sanity-content", "galleries"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching galleries:", error);
      throw new Error("Failed to fetch galleries");
    }
  },
  ["all--galleries"],
  getCacheOptions("galleries")
);
