"use server";

import { unstable_cache } from "next/cache";

import {
  CERTIFICASTES_QUERYResult,
  FEATURED_PROJECTS_QUERYResult,
  HOME_PRODUCTS_QUERYResult,
  HOME_PROJECTS_QUERYResult,
  HOME_SERVICES_QUERYResult,
  PROJECTS_CAROUSEL_QUERYResult,
  PROJECTS_QUERYResult,
} from "../../../sanity.types";
import { CERTIFICASTES_QUERY } from "../queries/certifications";
import { HOME_PRODUCTS_QUERY } from "../queries/products";
import { FEATURED_PROJECTS_QUERY, HOME_PROJECTS_QUERY, PROJECTS_CAROUSEL_QUERY, PROJECTS_QUERY } from "../queries/projects";
import { HOME_SERVICES_QUERY } from "../queries/services";
import { sanityFetch } from "./live";

const cacheOptions = {
  revalidate: 3600, // 1 hour
  tags: ["sanity-content"],
};

export const getHomeServices = async (): Promise<HOME_SERVICES_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: HOME_SERVICES_QUERY,
      });
      return data;
    },
    ["home-services"],
    cacheOptions
  )();
};

export const getHomeProjects = async (): Promise<HOME_PROJECTS_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: HOME_PROJECTS_QUERY,
      });
      return data;
    },
    ["home-projects"],
    cacheOptions
  )();
};
export const getFeaturedProjects = async (): Promise<FEATURED_PROJECTS_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: FEATURED_PROJECTS_QUERY,
      });
      return data;
    },
    ["featured-projects"],
    cacheOptions
  )();
};
export const getProjects = async (): Promise<PROJECTS_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: PROJECTS_QUERY,
      });
      return data;
    },
    ["projects"],
    cacheOptions
  )();
};
export const getProjectsCarousel = async (): Promise<PROJECTS_CAROUSEL_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: PROJECTS_CAROUSEL_QUERY,
      });
      return data;
    },
    ["projects-carousel"],
    cacheOptions
  )();
};

export const getHomeProducts = async (): Promise<HOME_PRODUCTS_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: HOME_PRODUCTS_QUERY,
      });
      return data;
    },
    ["home-products"],
    cacheOptions
  )();
};

export const getCertifications = async (): Promise<CERTIFICASTES_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: CERTIFICASTES_QUERY,
      });
      return data;
    },
    ["certificates"],
    cacheOptions
  )();
};