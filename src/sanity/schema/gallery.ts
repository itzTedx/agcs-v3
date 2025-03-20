import { FileText } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: FileText,
 
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
     
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
     
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
     
    }),
    
    defineField({
      name: "image",
      title: "Image",
      type: "image",
     
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
   
 
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
     
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
     
    }),
  
    defineField({
      name: "ogImage",
      title: "Open Graph Image - [1200x630]",
      type: "image",
     
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "image",
    },
    prepare(selection) {
     
      return { ...selection };
    },
  },
});
