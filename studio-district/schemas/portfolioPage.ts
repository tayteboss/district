import {multiTypeBlock} from '../objects'

export default {
  title: 'Roster Page',
  name: 'portfolioPage',
  type: 'document',
  fields: [
    {
      title: 'Reference Title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
    },
    {
      title: 'SEO title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'SEO Description',
      name: 'seoDescription',
      type: 'string',
    },
    {
      title: 'Hero title',
      name: 'heroTitle',
      type: 'array',
      of: [multiTypeBlock],
    },
  ],
}
