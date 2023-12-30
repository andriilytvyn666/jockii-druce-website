import {Rule} from 'sanity'

export default {
  name: 'track',
  title: 'Track',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.min(3).required(),
    },
    {
      name: 'lyrics',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.min(1).required(),
    },
    {
      name: 'mp3',
      title: 'Audio.mp3',
      type: 'file',
      options: {accept: 'audio/mpeg'},
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
