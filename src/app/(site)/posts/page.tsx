import { Metadata } from "next";
import { Suspense } from "react";

import { FlickeringGrid } from "@/components/animations/flickering-grid";
import { Card } from "@/components/global/card";
import { getPosts } from "@/sanity/lib/fetch";

import { POSTS_QUERYResult } from "../../../../sanity.types";

export const revalidate = 3600; // Revalidate every hour

const SITE_URL = process.env.SITE_URL;

export const metadata: Metadata = {
  title: "Blog Posts | AGCS - Latest Industry Insights & News",
  description:
    "Stay updated with the latest industry insights, trends, and expert advice on our blog. Discover in-depth articles about technology, business solutions, and more.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/posts`,
  },
  openGraph: {
    title: "Blog Posts | AGCS - Latest Industry Insights",
    description:
      "Stay updated with the latest industry insights, trends, and expert advice on our blog. Discover in-depth articles about technology, business solutions, and more.",
    type: "website",
    siteName: "AGCS",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add a default OG image
        width: 1200,
        height: 630,
        alt: "AGCS Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | AGCS - Latest Industry Insights",
    description:
      "Stay updated with the latest industry insights, trends, and expert advice on our blog.",
    images: ["/og-image.jpg"],
  },
};

function PostGrid({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <div className="grid gap-6 pt-6 md:grid-cols-2 md:pt-12 lg:grid-cols-3">
      {posts.map((p) => (
        <Card
          title={p.title}
          image={p.image}
          key={p._id}
          link={`/posts/${p.slug?.current}`}
          className="aspect-[4/3]"
        />
      ))}
    </div>
  );
}

export default async function PostsPage() {
  const posts = await getPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AGCS Blog",
    description:
      "Stay updated with the latest industry insights and expert advice",
    url: `${SITE_URL}/posts`,
    publisher: {
      "@type": "Organization",
      name: "AGCS",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      image: post.image,
      url: `${SITE_URL}/posts/${post.slug?.current}`,
      datePublished: post._createdAt || new Date().toISOString(),
      dateModified: post._updatedAt || new Date().toISOString(),
      author: {
        "@type": "Organization",
        name: "AGCS",
      },
      publisher: {
        "@type": "Organization",
        name: "AGCS",
        logo: {
          "@type": "ImageObject",
          url: "https://alliedgulf.me/agcs-logo.png",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="container py-6 md:py-12">
        <div className="bg-primary relative rounded-lg p-9 lg:p-12">
          <h2 id="faq-title" className="text-3xl font-medium">
            Blogs
          </h2>
          <p className="relative z-10 pt-1 text-lg font-light">
            Everything you need to know. Can't find an answer?
          </p>
          <FlickeringGrid
            className="absolute inset-0 z-0 size-full [mask-image:radial-gradient(75rem_circle_at_left,transparent,white)]"
            squareSize={4}
            gridGap={6}
            color="#0284c7"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        <Suspense fallback={<div>Loading posts...</div>}>
          <PostGrid posts={posts} />
        </Suspense>
      </section>
    </>
  );
}
