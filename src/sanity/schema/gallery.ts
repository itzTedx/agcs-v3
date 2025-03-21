import { orderRankField } from "@sanity/orderable-document-list";
import { IconLibraryPhoto } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: IconLibraryPhoto,

  fields: [
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
      name: "title",
      title: "Title",
      type: "string",
    }),
    orderRankField({ type: "gallery" }),
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
   
  },
});
