import { orderRankField } from "@sanity/orderable-document-list";
import { IconMessage } from "@tabler/icons-react";
import { defineType } from "sanity";

export default defineType({

    name: 'helpArticle',
  icon: IconMessage,
  type: 'document',
  title: 'Help article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'faqs',
      type: 'array',
      title: 'Frequently Asked Questions',
      of: [
        {
          type: 'faq'
        }
      ]
    },
     orderRankField({ type: "helpArticle" }),
  ]
})