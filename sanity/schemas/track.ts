import {Rule} from 'sanity'

export default {
  name: 'track',
  title: 'Track',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.min(3),
    },
    {
      name: 'lyrics',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.min(1),
    },
  ],
}
