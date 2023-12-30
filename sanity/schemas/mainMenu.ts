import {Rule} from 'sanity'

export default {
  name: 'mainMenu',
  title: 'Main Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'mainMenuItem',
      options: {collapsible: true, collapsed: true},
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'album',
      type: 'mainMenuItem',
      options: {collapsible: true, collapsed: true},
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'streaming',
      type: 'mainMenuItem',
      options: {collapsible: true, collapsed: true},
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'pix',
      type: 'mainMenuItem',
      options: {collapsible: true, collapsed: true},
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
