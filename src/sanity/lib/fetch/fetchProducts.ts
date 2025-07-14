import { unstable_cache } from "next/cache";

import {
  HOME_PRODUCTS_QUERYResult,
  PRODUCTS_BY_CATEGORY_QUERYResult,
  PRODUCTS_CATEGORIES_QUERYResult,
  PRODUCTS_CATEGORY_BY_CATEGORY_QUERYResult,
  PRODUCT_QUERYResult,
  RECENTLY_VIEWED_PRODUCTS_QUERYResult,
} from "../../../../sanity.types";
import {
  HOME_PRODUCTS_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  PRODUCTS_CATEGORIES_QUERY,
  PRODUCTS_CATEGORY_BY_CATEGORY_QUERY,
  PRODUCT_QUERY,
  RECENTLY_VIEWED_PRODUCTS_QUERY,
} from "../../queries/products";
import { sanityFetch } from "../live";
import { getCacheOptions } from "./utils";

export const getHomeProducts = unstable_cache(
  async (): Promise<HOME_PRODUCTS_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: HOME_PRODUCTS_QUERY,
        tags: ["sanity-content", "products"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching home products:", error);
      throw new Error("Failed to fetch home products");
    }
  },
  ["home-products"],
  getCacheOptions("products")
);

export const getCategories = unstable_cache(
  async (): Promise<PRODUCTS_CATEGORIES_QUERYResult> => {
    try {
      const { data } = await sanityFetch({
        query: PRODUCTS_CATEGORIES_QUERY,
        tags: ["sanity-content", "products"],
      });
      return data;
    } catch (error) {
      console.error("Error fetching product categories:", error);
      throw new Error("Failed to fetch product categories");
    }
  },
  ["product-categories"],
  getCacheOptions("products")
);

export const getProductBySlug = async (
  slug: string
): Promise<PRODUCT_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: PRODUCT_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    throw new Error("Failed to fetch product by slug");
  }
};

export const getAllProducts = async (
  slug: string
): Promise<PRODUCTS_BY_CATEGORY_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching all products by category:", error);
    throw new Error("Failed to fetch all products by category");
  }
};

export const getProductsBySlug = async (
  slug: string
): Promise<PRODUCTS_BY_CATEGORY_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching products by slug:", error);
    throw new Error("Failed to fetch products by slug");
  }
};

export const getProductCategoryBySlug = async (
  slug: string
): Promise<PRODUCTS_CATEGORY_BY_CATEGORY_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: PRODUCTS_CATEGORY_BY_CATEGORY_QUERY,
      params: { slug },
    });
    return data;
  } catch (error) {
    console.error("Error fetching product category by slug:", error);
    throw new Error("Failed to fetch product category by slug");
  }
};

export async function getRecentlyViewedProducts(
  ids: string[]
): Promise<RECENTLY_VIEWED_PRODUCTS_QUERYResult> {
  if (!ids.length) return [];
  try {
    const { data } = await sanityFetch({
      query: RECENTLY_VIEWED_PRODUCTS_QUERY,
      params: { ids },
    });
    return data.sort(
      (a: { _id: string }, b: { _id: string }) =>
        ids.indexOf(a._id) - ids.indexOf(b._id)
    );
  } catch (error) {
    console.error("Error fetching recently viewed products:", error);
    throw new Error("Failed to fetch recently viewed products");
  }
}
