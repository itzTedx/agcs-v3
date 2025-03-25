import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      description: "Enable this option to mark the item as featured",
      title: "Mark as Featured",
      type: "boolean",
    }),

    defineField({
      name: "image",
      title: "Project Image:",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    orderRankField({ type: "projects" }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
