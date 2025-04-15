import { defineType } from "sanity";

export default defineType({
 
  name: 'faq',
  type: 'object',
  title: 'Frequently asked question',


  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question'
    },
    {
      name: 'answer',
      type: 'text',
      title: 'Answer',
    }
  ]
})
