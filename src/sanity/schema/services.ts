import { defineField, defineType } from "sanity";

export default defineType({
    name: "services",
    title: "Services",
    type: "document",
    fields: [
      defineField({
        name: "servicesTitle",
        title: 'Title of the service',
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "thumbnail",
        title: "Thumbnail",
        type: "image",
        description: 'Size must be 1280x720',
        validation: (Rule) => Rule.required(),
        
      }),
      defineField({
        name: 'category',
      
        title: 'Category',
        type: 'reference',
        to: [{ type: 'servicesCategory' }],
      }),
      defineField({
        name: "servicesImage",
        title: "Image",
        type: "array",
        of: [
          {
            type: "image",
            options: {
                hotspot: true,
                metadata: [
                  'blurhash',   
                  'lqip',       
                  'palette',   
                  'image',      
                ]
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
          },
        ],
        description: 'Recommended size width:534px, height: 262px',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "servicesSlug",
        title: 'Generate Url',
        description: 'Unique website link for better user experience...',
      type: 'slug',
      options: {
        source: 'servicesTitle',
        maxLength: 96,
      },
      }),
      defineField({
        name: 'servicesDescription',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'servicesFile',
      title: 'Brouchure',
      description: 'PDF file only accepted',
      type: 'file',
      options: {
        storeOriginalFilename: true,
        accept: '.pdf',
      },
      }),
      defineField({
        name: 'metaTagTitle',
      title: 'Title for SEO',
      type: 'string',
      validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'metaTagKeyword',
        title: 'Keywords for SEO',
        description:
          "Recommended keyword generator 'https://ahrefs.com/keyword-generator'. Separate keywords by comma','",
        type: 'text',
      }),
     
    ],
    preview: {
      select: {
        title: "servicesTitle",
        media: "thumbnail",
        
      },
    },
  });