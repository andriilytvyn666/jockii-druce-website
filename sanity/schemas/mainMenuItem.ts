import {Rule} from 'sanity'

export default {
  name: 'mainMenuItem',
  title: 'Main Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule: Rule) => rule.min(3).max(32).required(),
    },
    {
      name: 'enabled',
      type: 'boolean',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
