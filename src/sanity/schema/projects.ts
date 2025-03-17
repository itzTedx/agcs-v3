import { defineField, defineType } from "sanity";

export default defineType({
    name: 'featuredProject',
    title: 'Featured Project',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Project Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'isFeatured',
        title: 'Featured',
        type: '',
        validation: (Rule) => Rule.required(),
      }),
      

      defineField({
        name: 'description',
        title: 'Project Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),

      defineField({
        name: 'image',
        title: 'Project Image:',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),

    

    ],
    preview: {
      select: {
        title: "title",
        media: "image",
        
      },
    },
  });