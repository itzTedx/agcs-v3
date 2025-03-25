import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectsCarousel",
  title: "Projects Carosel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Project Image:",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    orderRankField({ type: "projectsCarousel" }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
