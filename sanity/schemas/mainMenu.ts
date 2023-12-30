import {Rule} from 'sanity'

export default {
  name: 'mainMenu',
  title: 'Main Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'mainMenuItem',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'album',
      type: 'mainMenuItem',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'streaming',
      type: 'mainMenuItem',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'pix',
      type: 'mainMenuItem',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
