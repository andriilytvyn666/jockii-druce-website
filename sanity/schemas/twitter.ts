import {Rule} from 'sanity'

export default {
  name: 'twitter',
  title: 'Twitter',
  type: 'document',
  fields: [
    {
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'string',
          description: '32-128 characters long post',
          validation: (rule: Rule) => rule.min(32).max(256).required(),
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
