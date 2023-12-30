import {Rule} from 'sanity'

export default {
  name: 'twitterPost',
  title: 'Twitter Post',
  type: 'document',
  fields: [
    {
      name: 'post',
      type: 'string',
      description: '16-128 characters long post',
      validation: (rule: Rule) => rule.min(32).max(128).required(),
    },
  ],
}
