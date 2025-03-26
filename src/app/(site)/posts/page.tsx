import { FlickeringGrid } from "@/components/animations/flickering-grid";
import { Card } from "@/components/global/card";
import { getPosts } from "@/sanity/lib/fetch";

export default async function PostsPage() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <section className="container py-12">
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
      <div className="grid grid-cols-3 gap-6 pt-12">
        {posts.map((p) => (
          <Card
            title={p.title}
            image={p.image}
            key={p._id}
            link={`/posts/${p.slug?.current}`}
          />
        ))}
      </div>
    </section>
  );
}
