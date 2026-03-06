/**
 * Static fetch helpers for use in generateStaticParams.
 * Uses client.fetch directly to avoid draftMode() which cannot be called
 * outside request scope during build. See Sanity docs:
 * https://www.sanity.io/learn/course/controlling-cached-content-in-next-js/combining-sanity-cdn-with-the-next-js-cache
 */

import type {
	POSTS_QUERYResult,
	PRODUCTS_BY_CATEGORY_QUERYResult,
	PRODUCTS_CATEGORIES_QUERYResult,
	SERVICE_QUERYResult,
	SERVICES_CATEOGORIES_QUERYResult,
} from "../../../../sanity.types";
import { POSTS_QUERY } from "../../queries/posts";
import {
	PRODUCTS_BY_CATEGORY_QUERY,
	PRODUCTS_CATEGORIES_QUERY,
} from "../../queries/products";
import {
	SERVICE_QUERY,
	SERVICES_CATEOGORIES_QUERY,
} from "../../queries/services";
import { client } from "../client";

const staticClient = client.withConfig({ useCdn: false });

export async function getCategoriesStatic(): Promise<PRODUCTS_CATEGORIES_QUERYResult> {
	return staticClient.fetch(PRODUCTS_CATEGORIES_QUERY);
}

export async function getProductsBySlugStatic(
	slug: string
): Promise<PRODUCTS_BY_CATEGORY_QUERYResult> {
	return staticClient.fetch(PRODUCTS_BY_CATEGORY_QUERY, { slug });
}

export async function getServicesCategoriesStatic(): Promise<SERVICES_CATEOGORIES_QUERYResult> {
	return staticClient.fetch(SERVICES_CATEOGORIES_QUERY);
}

export async function getServiceBySlugStatic(
	slug: string
): Promise<SERVICE_QUERYResult> {
	return staticClient.fetch(SERVICE_QUERY, { slug });
}

export async function getPostsStatic(): Promise<POSTS_QUERYResult> {
	return staticClient.fetch(POSTS_QUERY);
}
