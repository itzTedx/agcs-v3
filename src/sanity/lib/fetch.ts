'use server'

import { unstable_cache } from 'next/cache';
import { HOME_PRODUCTS_QUERYResult, HOME_PROJECTS_QUERYResult, HOME_SERVICES_QUERYResult } from "../../../sanity.types";
import { HOME_PRODUCTS_QUERY } from "../queries/products";
import { HOME_PROJECTS_QUERY } from "../queries/projects";
import { HOME_SERVICES_QUERY } from "../queries/services";
import { sanityFetch } from "./live";

const cacheOptions = {
  revalidate: 3600, // 1 hour
  tags: ['sanity-content'],
};

export const getHomeServices = async (): Promise<HOME_SERVICES_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: HOME_SERVICES_QUERY,
      });
      return data;
    },
    ['home-services'],
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
    ['home-projects'],
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
    ['home-products'],
    cacheOptions
  )();
};
