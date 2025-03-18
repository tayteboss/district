import {multiTypeBlock} from '../objects'

export default {
  title: 'Portfolio Page',
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
      title: 'Hero title',
      name: 'heroTitle',
      type: 'array',
      of: [multiTypeBlock],
    },
  ],
}
