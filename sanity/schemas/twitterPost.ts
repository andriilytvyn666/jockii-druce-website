import {Rule} from 'sanity'

export default {
  name: 'twitterPost',
  title: 'Twitter Post',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      description: 'not visible on website',
      validation: (rule: Rule) => rule.min(3),
    },
    {
      name: 'post',
      type: 'string',
      description: '32-128 characters long post',
      validation: (rule: Rule) => rule.min(32).max(128),
    },
    {
      name: 'date',
      type: 'date',
    },
  ],
}
