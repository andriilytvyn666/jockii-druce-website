import {Rule} from 'sanity'

export default {
  name: 'twitter',
  title: 'Twitter',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.min(3),
    },
    {
      name: 'date',
      type: 'array',
      of: [{type: 'twitterPost'}],
    },
  ],
}
