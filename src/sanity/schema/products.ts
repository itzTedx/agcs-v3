import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
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
        name: 'title',
        title: 'Product Name',
        type: 'string', 
        group: "content",
        validation: (Rule) => Rule.required(),
      }),

    

      defineField({
        name: 'body',
        type: 'array',
        group: "content",
        title: 'Product Brief',
        of: [
          {
            type: 'block',
          },
        ],
      }),

      defineField({
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        group: "seo",
        description: 'Size must be 1280x720',
      }),

      defineField({
        name: 'slug',
        title: 'Generate Url',
        group: "settings",
        description: 'Unique website link for better user experience...',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),

      defineField({
        name: 'image',
        group: "content",
        title: 'Product Image',
        description: 'Recommended size width:220px, height: 220px',
        type: 'array',
        of: [
            {
            type: 'image',
            options: {
                hotspot: true,
            },
            },
        ],
      }),

      defineField({
        name: 'category',
        group: "content",
        title: 'Category',
        type: 'reference',
        to: [{ type: 'productsCategory' }],
      }),

      defineField({
        name: 'metaTagTitle',
        group: "seo",
        title: 'Title for SEO',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),

      defineField({
        name: 'description',
          group: "seo",
        title: 'Short Description for SEO',
        type: 'text',
      }),

      defineField({
        name: 'metaTagKeyword',
          group: "seo",
        title: 'Keywords for SEO',
        description:
          "Recommended keyword generator 'https://ahrefs.com/keyword-generator'. Separate keywords by comma','",
        type: 'text',
      }),
      orderRankField({ type: "products" }),
    ],
    preview: {
      select: {
        title: "title",
        media: "thumbnail",
        
      },
    },
  });