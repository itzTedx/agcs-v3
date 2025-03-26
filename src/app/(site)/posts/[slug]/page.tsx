import { Metadata } from "next";
import { notFound } from "next/navigation";

import PortableTextRenderer from "@/components/portable-text-renderer";
import PostHero from "@/features/post/components/hero";
import Breadcrumb from "@/features/products/components/breadcrumb";
import { getPostBySlug, getPosts } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const ogImage = post.image
    ? urlFor(post.image).width(1200).height(630).url()
    : "";

  return {
    title: `${post.title} - AGCS Blog`,
    description:
      post.excerpt ||
      `Read ${post.title}, a detailed article about ${post.title} on AGCS Blog`,

    openGraph: {
      title: post.title!,
      description: post.excerpt || `Read ${post.title} on AGCS Blog`,
      images: post.image
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: post.title!,
            },
          ]
        : [],
      type: "article",
      publishedTime: post._createdAt,
      modifiedTime: post._updatedAt,
      locale: "en_US",
      siteName: "AGCS Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title!,
      description: post.excerpt!,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: `https://alliedgulf.me/posts/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? urlFor(post.image).url() : undefined,
    datePublished: post._createdAt,
    dateModified: post._updatedAt,
    author: {
      "@type": "Person",
      name: "Allied Gulf",
    },
    publisher: {
      "@type": "Organization",
      name: "AGCS",
      logo: {
        "@type": "ImageObject",
        url: "https://alliedgulf.me/agcs-logo.png", // Update with actual logo URL
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://alliedgulf.me/posts/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="container max-w-4xl">
        <article className="h-full">
          <Breadcrumb
            segments={[
              { title: "Blogs", href: "/posts" },
              { title: post.title! },
            ]}
          />
          <PostHero {...post} />
          <div className="prose dark:prose-invert max-w-4xl">
            {post.body && <PortableTextRenderer value={post.body} />}
          </div>
        </article>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug?.current,
  }));
}
