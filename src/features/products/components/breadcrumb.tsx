import { Fragment } from "react";

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

export default function Breadcrumb({ segments }: BreadcrumbProps) {
  return (
    <ShadRoot className="py-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <HomeIcon size={16} aria-hidden="true" />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {segment.href ? (
                <BreadcrumbLink href={segment.href}>
                  {segment.title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{segment.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </ShadRoot>
  );
}
