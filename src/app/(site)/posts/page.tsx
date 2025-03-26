import { getPosts } from "@/sanity/lib/fetch";

export default async function PostsPage() {
  const posts = getPosts();

  console.log(posts);
  return <div></div>;
}
