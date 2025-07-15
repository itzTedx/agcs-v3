import { defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  title: "Services",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fields: [
    defineField({
      name: "servicesTitle",
      title: "Title of the service",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "servicesDescription",
      title: "Description",
      type: "array",
      group: "content",
      of: [
        {
          type: "block",
        },
      ],
    }),

    defineField({
      name: "servicesSlug",
      title: "Generate Url",
      group: "settings",
      description: "Unique website link for better user experience...",
      type: "slug",
      options: {
        source: "servicesTitle",
        maxLength: 96,
      },
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      group: "seo",
      description: "Size must be 1280x720",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      group: "settings",
      title: "Category",
      type: "reference",
      to: [{ type: "servicesCategory" }],
    }),

    defineField({
      name: "servicesImage",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relatedProducts",
      title: "Related Products",
      description: "Products Related to this service",
      type: "array",
      group: "settings",
      of: [{ type: "reference", to: { type: "products" } }],
    }),

    defineField({
      group: "content",
      name: "servicesFile",
      title: "Brochure",
      description: "PDF file only accepted",
      type: "file",
      options: {
        storeOriginalFilename: true,
        accept: ".pdf",
      },
    }),
    defineField({
      group: "seo",
      name: "metaTagTitle",
      title: "Title for SEO",
      description: "Recommended length: 50-60 characters.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      group: "seo",
      name: "metaTagDescription",
      title: "Meta Description for SEO",
      description: "Recommended length: 150-160 characters",
      type: "text",
    }),
    defineField({
      group: "seo",
      name: "metaTagKeyword",
      title: "Keywords for SEO",
      description:
        "Recommended keyword generator 'https://ahrefs.com/keyword-generator'. Separate keywords by comma','",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "servicesTitle",
      media: "thumbnail",
    },
  },
});
