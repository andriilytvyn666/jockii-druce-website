import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {TwitterIcon, MenuIcon} from '@sanity/icons'
import {IoMusicalNotes} from 'react-icons/io5'
import {FaRegImage, FaSpotify} from 'react-icons/fa6'

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
              .icon(MenuIcon)
              .title('Main Menu')
              .child(S.document().title('Main Menu').schemaType('mainMenu').documentId('mainMenu')),
            S.listItem()
              .title('Twitter')
              .icon(TwitterIcon)
              .child(S.document().title('Twitter').schemaType('twitter').documentId('twitter')),
            S.listItem()
              .title('Tracks')
              .icon(IoMusicalNotes)
              .child(S.document().title('Album').schemaType('trackList').documentId('trackList')),
            S.listItem()
              .icon(FaRegImage)
              .title('Pix')
              .child(S.document().title('Pix').schemaType('pix').documentId('pix')),
            S.listItem()
              .title('Streaming')
              .icon(FaSpotify)
              .child(
                S.document()
                  .title('Streaming')
                  .schemaType('streamingLinks')
                  .documentId('streamingLinks'),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
