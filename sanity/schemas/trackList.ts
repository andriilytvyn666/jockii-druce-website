import {Rule} from 'sanity'

export default {
  name: 'trackList',
  title: 'Track List',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.min(3),
    },
    {
      name: 'tracks',
      type: 'array',
      of: [{type: 'track'}],
    },
  ],
}
