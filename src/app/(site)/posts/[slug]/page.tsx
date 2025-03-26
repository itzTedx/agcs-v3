import { notFound } from "next/navigation";

import PortableTextRenderer from "@/components/portable-text-renderer";
import PostHero from "@/features/post/components/hero";
import Breadcrumb from "@/features/products/components/breadcrumb";
import { getPostBySlug } from "@/sanity/lib/fetch";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  console.log(post);
  return (
    <section className="container max-w-4xl">
      <article>
        <Breadcrumb
          segments={[
            { title: "Blogs", href: "/posts" },
            {
              title: post.title!,
            },
          ]}
        />
        <PostHero {...post} />
        <div className="prose dark:prose-invert max-w-4xl">
          {post.body && <PortableTextRenderer value={post.body} />}
        </div>
      </article>
    </section>
  );
}
