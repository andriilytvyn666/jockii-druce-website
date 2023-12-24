import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {TwitterIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'jockii-druce-website',

  projectId: '4d7emgbh',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Twitter')
              .icon(TwitterIcon)
              .child(S.document().schemaType('twitter').documentId('twitter')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
