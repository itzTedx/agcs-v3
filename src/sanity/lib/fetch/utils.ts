export function getCacheOptions(resource: string) {
  return {
    revalidate: 3600,
    tags: ["sanity-content", resource],
  };
}
