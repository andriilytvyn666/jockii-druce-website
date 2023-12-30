import {Rule} from 'sanity'

export default {
  name: 'pix',
  title: 'Pix',
  type: 'document',
  fields: [
    {
      name: 'pix',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
