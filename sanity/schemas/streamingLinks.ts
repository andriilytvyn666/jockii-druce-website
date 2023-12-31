import {Rule} from 'sanity'

export default {
  name: 'streamingLinks',
  title: 'Streaming Links',
  type: 'document',
  fields: [
    {
      name: 'spotify',
      type: 'string',
      validation: (rule: Rule) => rule.uri().required(),
    },
    {
      name: 'appleMusic',
      type: 'string',
      validation: (rule: Rule) => rule.uri().required(),
    },
    {
      name: 'youtubeMusic',
      type: 'string',
      validation: (rule: Rule) => rule.uri().required(),
    },
    {
      name: 'soundCloud',
      type: 'string',
      validation: (rule: Rule) => rule.uri().required(),
    },
  ],
}
