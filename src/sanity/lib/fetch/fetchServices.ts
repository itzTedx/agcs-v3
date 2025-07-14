import { unstable_cache } from "next/cache";

import {
  HOME_SERVICES_QUERYResult,
  SERVICES_BY_CATEOGORY_QUERYResult,
  SERVICES_CATEGORY_BY_CATEGORY_QUERYResult,
  SERVICES_CATEOGORIES_QUERYResult,
  SERVICE_QUERYResult,
} from "../../../../sanity.types";
import {
  HOME_SERVICES_QUERY,
  SERVICES_BY_CATEOGORY_QUERY,
  SERVICES_CATEGORY_BY_CATEGORY_QUERY,
  SERVICES_CATEOGORIES_QUERY,
  SERVICE_QUERY,
} from "../../queries/services";
import { sanityFetch } from "../live";
import { getCacheOptions } from "./utils";

export const getHomeServices = unstable_cache(
  async (): Promise<HOME_SERVICES_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: HOME_SERVICES_QUERY,
        tags: ["sanity-content", "services"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching home services:", error);
      throw new Error("Failed to fetch home services");
    }
  },
  ["home-services"],
  getCacheOptions("services")
);

export const getServicesCategories = unstable_cache(
  async (): Promise<SERVICES_CATEOGORIES_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: SERVICES_CATEOGORIES_QUERY,
        tags: ["sanity-content", "services"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching services categories:", error);
      throw new Error("Failed to fetch services categories");
    }
  },
  ["services-categories"],
  getCacheOptions("services")
);

export const getServicesByCategory = async (
  slug: string
): Promise<SERVICES_BY_CATEOGORY_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: SERVICES_BY_CATEOGORY_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching services by category:", error);
    throw new Error("Failed to fetch services by category");
  }
};

export const getServiceCategoryBySlug = async (
  slug: string
): Promise<SERVICES_CATEGORY_BY_CATEGORY_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: SERVICES_CATEGORY_BY_CATEGORY_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching service category by slug:", error);
    throw new Error("Failed to fetch service category by slug");
  }
};

export const getServiceBySlug = async (
  slug: string
): Promise<SERVICE_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: SERVICE_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching service by slug:", error);
    throw new Error("Failed to fetch service by slug");
  }
};
