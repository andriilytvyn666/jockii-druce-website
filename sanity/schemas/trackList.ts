import {Rule} from 'sanity'

export default {
  name: 'trackList',
  title: 'Track List',
  type: 'document',
  fields: [
    {
      name: 'tracks',
      type: 'array',
      of: [{type: 'track'}],
      validation: (rule: Rule) => rule.unique().required(),
    },
  ],
}
