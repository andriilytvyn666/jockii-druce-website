import {Rule} from 'sanity'

export default {
  name: 'pix',
  title: 'Pix',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.min(3),
    },
    {
      name: 'pix',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
