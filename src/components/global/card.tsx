import Image from "next/image";
import Link from "next/link";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

import { CardContent, Card as CardUi } from "../ui/card";

interface Props {
  alt?: string | null;
  title: string | null;
  image?: SanityImageSource | null;
  className?: string;
  link?: string;
  priority?: boolean;
  description?: string | null;
  date?: string;
}

export const Card = ({
  image,
  title,
  alt,
  className,
  link,
  priority,
  description,
  date,
}: Props) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    image: image ? urlFor(image).url() : undefined,
    description: description,
    datePublished: date,
  };

  return (
    <CardUi className="p-0">
      <Link href={link ?? "#"}>
        <CardContent
          className={cn("relative p-1.5")}
          aria-label={`Article: ${title}`}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
          {image ? (
            <article
              className={cn(
                "relative aspect-video overflow-hidden rounded-lg",
                className
              )}
            >
              <Title>{title}</Title>
              <Image
                src={urlFor(image).url()}
                alt={alt ?? title ?? "Article image"}
                title={title ?? ""}
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                quality={100}
                className="transition-transform duration-300 hover:scale-105"
                priority={priority}
                loading={priority ? "eager" : "lazy"}
              />
              {description && <meta name="description" content={description} />}
            </article>
          ) : (
            <article>
              <Title>{title}</Title>
              {description && <meta name="description" content={description} />}
            </article>
          )}
        </CardContent>
      </Link>
    </CardUi>
  );
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="bg-background/75 text-primary-foreground absolute bottom-0 left-0 z-10 m-2 rounded-lg border border-sky-400/40 px-3 py-1 font-medium shadow-2xl backdrop-blur-2xl">
      {children}
    </h3>
  );
};
