import { unstable_cache } from "next/cache";

import {
  FEATURED_PROJECTS_QUERYResult,
  HOME_PROJECTS_QUERYResult,
  PROJECTS_CAROUSEL_QUERYResult,
  PROJECTS_QUERYResult,
} from "../../../../sanity.types";
import {
  FEATURED_PROJECTS_QUERY,
  HOME_PROJECTS_QUERY,
  PROJECTS_CAROUSEL_QUERY,
  PROJECTS_QUERY,
} from "../../queries/projects";
import { sanityFetch } from "../live";
import { getCacheOptions } from "./utils";

export const getHomeProjects = unstable_cache(
  async (): Promise<HOME_PROJECTS_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: HOME_PROJECTS_QUERY,
        tags: ["sanity-content", "projects"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching home projects:", error);
      throw new Error("Failed to fetch home projects");
    }
  },
  ["home-projects"],
  getCacheOptions("projects")
);

export const getFeaturedProjects = unstable_cache(
  async (): Promise<FEATURED_PROJECTS_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: FEATURED_PROJECTS_QUERY,
        tags: ["sanity-content", "projects"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      throw new Error("Failed to fetch featured projects");
    }
  },
  ["featured-projects"],
  getCacheOptions("projects")
);

export const getProjects = unstable_cache(
  async (): Promise<PROJECTS_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: PROJECTS_QUERY,
        tags: ["sanity-content", "projects"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw new Error("Failed to fetch projects");
    }
  },
  ["projects"],
  getCacheOptions("projects")
);

export const getProjectsCarousel = unstable_cache(
  async (): Promise<PROJECTS_CAROUSEL_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: PROJECTS_CAROUSEL_QUERY,
        tags: ["sanity-content", "projects"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching projects carousel:", error);
      throw new Error("Failed to fetch projects carousel");
    }
  },
  ["projects-carousel"],
  getCacheOptions("projects")
);
