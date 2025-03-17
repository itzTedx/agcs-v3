import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'servicesCategory',
    title: 'Services Category',
    type: 'document',
    fields: [
      defineField({
        name: 'category',
        title: 'Service Category',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'slug',
      title: 'Generate Url',
      description: 'Unique website link for better user experience...',
      type: 'slug',
      options: {
        source: 'category',
        maxLength: 96,
      },
      }),
      defineField({
        name: 'image',
        title: 'Service Category Image',
        type: 'image',
        description: 'Recommended size width:220px, height: 220px',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'description',
        title: 'Services Description',
        type: 'text',
      }),
      defineField({
        name: 'file',
      title: 'Brouchure',
      description: 'PDF file only accepted',
      type: 'file',
      options: {
        storeOriginalFilename: true,
        accept: '.pdf',
      },
      }),
      orderRankField({ type: "servicesCategory" }),
     
    ],
    preview: {
      select: {
        title: "category",
        media: "image",
        
      },
    },
  });