import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {TwitterIcon} from '@sanity/icons'
import {IoMusicalNotes} from 'react-icons/io5'
import {FaRegImage} from 'react-icons/fa6'

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
            S.listItem()
              .title('Tracks')
              .icon(IoMusicalNotes)
              .child(S.document().schemaType('trackList').documentId('trackList')),
            S.listItem()
              .icon(FaRegImage)
              .title('Pix')
              .child(S.document().schemaType('pix').documentId('pix')),
            S.listItem()
              .title('Streaming')
              .child(S.document().schemaType('streamingLinks').documentId('streamingLinks')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
