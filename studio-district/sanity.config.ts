import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {muxInput} from 'sanity-plugin-mux-input'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'
import {EarthGlobeIcon, DocumentIcon, CaseIcon, BulbOutlineIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'District',

  projectId: 'jnluy9nd',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .icon(EarthGlobeIcon)
              .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('Home Page')
              .icon(DocumentIcon)
              .child(S.editor().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('About Page')
              .icon(DocumentIcon)
              .child(S.editor().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('Portfolio Page')
              .icon(DocumentIcon)
              .child(S.editor().schemaType('portfolioPage').documentId('portfolioPage')),
            S.listItem()
              .title('Contact Page')
              .icon(DocumentIcon)
              .child(S.editor().schemaType('contactPage').documentId('contactPage')),
            S.divider(),
            S.listItem()
              .title('Talent')
              .icon(CaseIcon)
              .child(
                S.documentList().title('Talent').schemaType('talent').filter('_type == "talent"'),
              ),
            S.divider(),
          ])
      },
    }),
    visionTool(),
    muxInput({mp4_support: 'standard', max_resolution_tier: '2160p'}),
    vercelDeployTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  parts: [
    {
      name: 'part:@sanity/base/theme/variables-style',
      path: './customEditorStyles.css',
    },
  ],
})
