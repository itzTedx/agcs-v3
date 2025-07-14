import { unstable_cache } from "next/cache";

import { CERTIFICASTES_QUERYResult } from "../../../../sanity.types";
import { CERTIFICASTES_QUERY } from "../../queries/certifications";
import { sanityFetch } from "../live";
import { getCacheOptions } from "./utils";

export const getCertifications = unstable_cache(
  async (): Promise<CERTIFICASTES_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: CERTIFICASTES_QUERY,
        tags: ["sanity-content", "certificates"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching certifications:", error);
      throw new Error("Failed to fetch certifications");
    }
  },
  ["certificates"],
  getCacheOptions("certificates")
);
