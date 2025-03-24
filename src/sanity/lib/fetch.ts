"use server";

import { unstable_cache } from "next/cache";

import {
  CERTIFICASTES_QUERYResult,
  FEATURED_PROJECTS_QUERYResult,
  GALLERY_QUERYResult,
  HOME_PRODUCTS_QUERYResult,
  HOME_PROJECTS_QUERYResult,
  HOME_SERVICES_QUERYResult,
  PRODUCT_QUERYResult,
  PRODUCTS_BY_CATEGORY_QUERYResult,
  PRODUCTS_CATEGORIES_QUERYResult,
  PRODUCTS_CATEGORY_BY_CATEGORY_QUERYResult,
  PROJECTS_CAROUSEL_QUERYResult,
  PROJECTS_QUERYResult,
  RECENTLY_VIEWED_PRODUCTS_QUERYResult,
  SERVICE_QUERYResult,
  SERVICES_BY_CATEOGORY_QUERYResult,
  SERVICES_CATEGORY_BY_CATEGORY_QUERYResult,
  SERVICES_CATEOGORIES_QUERYResult
} from "../../../sanity.types";
import { CERTIFICASTES_QUERY } from "../queries/certifications";
import { GALLERY_QUERY } from "../queries/gallery";
import { HOME_PRODUCTS_QUERY, PRODUCT_QUERY, PRODUCTS_BY_CATEGORY_QUERY, PRODUCTS_CATEGORIES_QUERY, PRODUCTS_CATEGORY_BY_CATEGORY_QUERY, RECENTLY_VIEWED_PRODUCTS_QUERY } from "../queries/products";
import { FEATURED_PROJECTS_QUERY, HOME_PROJECTS_QUERY, PROJECTS_CAROUSEL_QUERY, PROJECTS_QUERY } from "../queries/projects";
import { HOME_SERVICES_QUERY, SERVICE_QUERY, SERVICES_BY_CATEOGORY_QUERY, SERVICES_CATEGORY_BY_CATEGORY_QUERY, SERVICES_CATEOGORIES_QUERY } from "../queries/services";
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
    ["home-services_categories"],
    cacheOptions
  )();
};

export const getServicesCategories = async (): Promise<SERVICES_CATEOGORIES_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: SERVICES_CATEOGORIES_QUERY,
      });
      return data;
    },
    ["services-categories"],
    cacheOptions
  )();
};

export const getServicesByCategory = async (slug: string): Promise<SERVICES_BY_CATEOGORY_QUERYResult> => {
    const { data } = await sanityFetch({
      query: SERVICES_BY_CATEOGORY_QUERY,
      params: {slug}
    });
    return data;
  }

  export const getServiceCategoryBySlug = async (slug: string): Promise<SERVICES_CATEGORY_BY_CATEGORY_QUERYResult> => {
 
    const { data } = await sanityFetch({
      query: SERVICES_CATEGORY_BY_CATEGORY_QUERY,
      params: {slug}
      
    });
    return data;
  }
  
  export const getServiceBySlug = async (slug: string): Promise<SERVICE_QUERYResult> => {
 
    const { data } = await sanityFetch({
      query: SERVICE_QUERY,
      params: {slug}
      
    });
    return data;
  }
    
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

export const getProductBySlug = async (slug: string): Promise<PRODUCT_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: {slug}
  });
  
  return data
}
  


export const getCategories = async (): Promise<PRODUCTS_CATEGORIES_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: PRODUCTS_CATEGORIES_QUERY,
      });
      return data;
    },
    ["categories"],
    cacheOptions
  )();
};

export const getAllProducts = async (slug: string): Promise<PRODUCTS_BY_CATEGORY_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: PRODUCTS_BY_CATEGORY_QUERY,
        params: {slug}
        
      });
      return data;
    },
    ["all-products"],
    cacheOptions
  )();
};

export const getProductsBySlug = async (slug: string): Promise<PRODUCTS_BY_CATEGORY_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PRODUCTS_BY_CATEGORY_QUERY,
    params: { slug }
  });
  return data;
};

export const getProductCategoryBySlug = async (slug: string): Promise<PRODUCTS_CATEGORY_BY_CATEGORY_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PRODUCTS_CATEGORY_BY_CATEGORY_QUERY,
    params: {slug}
    
  });
  return data;
}
    

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

export const getGalleries = async (): Promise<GALLERY_QUERYResult> => {
  return unstable_cache(
    async () => {
      const { data } = await sanityFetch({
        query: GALLERY_QUERY,
      });
      return data;
    },
    ["all--galleries"],
    cacheOptions
  )();
};

export async function getRecentlyViewedProducts(ids: string[]): Promise<RECENTLY_VIEWED_PRODUCTS_QUERYResult> {


  if (!ids.length) return [];
  
  const { data } = await sanityFetch({
    query: RECENTLY_VIEWED_PRODUCTS_QUERY,
    params: { ids },
    
  });

 
  
  return data.sort((a: any, b: any) => 
    ids.indexOf(a._id) - ids.indexOf(b._id)
  );
}