import { Fragment, memo } from "react";

import { HomeIcon } from "lucide-react";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as ShadRoot,
} from "@/components/ui/breadcrumb";

interface BreadcrumbSegment {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  segments: BreadcrumbSegment[];
}

const Breadcrumb = memo(({ segments }: BreadcrumbProps) => {
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2, // +2 because Home is first
      name: segment.title,
      item: segment.href ? `${process.env.SITE_URL}${segment.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ShadRoot className="py-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" aria-label="Navigate to home page">
              <HomeIcon size={16} aria-hidden="true" />
              <span className="sr-only">Home</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {segments.map((segment, index) => (
            <Fragment key={`${segment.title}-${index}`}>
              <BreadcrumbSeparator aria-hidden="true" />
              <BreadcrumbItem>
                {segment.href ? (
                  <BreadcrumbLink
                    href={segment.href}
                    aria-label={`Navigate to ${segment.title}`}
                  >
                    {segment.title}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage aria-current="page">
                    {segment.title}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </ShadRoot>
    </>
  );
});

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
