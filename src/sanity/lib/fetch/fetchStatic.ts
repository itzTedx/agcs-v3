/**
 * Static fetch helpers for use in generateStaticParams.
 * Uses client.fetch directly to avoid draftMode() which cannot be called
 * outside request scope during build. See Sanity docs:
 * https://www.sanity.io/learn/course/controlling-cached-content-in-next-js/combining-sanity-cdn-with-the-next-js-cache
 */

import {
	PRODUCTS_BY_CATEGORY_QUERY,
	PRODUCTS_CATEGORIES_QUERY,
} from "../../queries/products";
import {
	SERVICES_CATEOGORIES_QUERY,
	SERVICE_QUERY,
} from "../../queries/services";
import { POSTS_QUERY } from "../../queries/posts";
import { client } from "../client";

const staticClient = client.withConfig({ useCdn: false });

export async function getCategoriesStatic() {
	return staticClient.fetch(PRODUCTS_CATEGORIES_QUERY);
}

export async function getProductsBySlugStatic(slug: string) {
	return staticClient.fetch(PRODUCTS_BY_CATEGORY_QUERY, { slug });
}

export async function getServicesCategoriesStatic() {
	return staticClient.fetch(SERVICES_CATEOGORIES_QUERY);
}

export async function getServiceBySlugStatic(slug: string) {
	return staticClient.fetch(SERVICE_QUERY, { slug });
}

export async function getPostsStatic() {
	return staticClient.fetch(POSTS_QUERY);
}
