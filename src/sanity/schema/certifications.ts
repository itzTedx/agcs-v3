import { defineField, defineType } from "sanity";

export default defineType({
  name: "certifications",
  title: "Certifications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Recommended size width:220px, height: 220px",
    }),

    defineField({
      name: "certificate",
      title: "Certificate",
      description: "PDF file only accepted",
      type: "file",
      options: {
        storeOriginalFilename: true,
        accept: ".pdf",
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
