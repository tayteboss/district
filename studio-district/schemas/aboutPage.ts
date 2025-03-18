import {multiTypeBlock} from '../objects'

export default {
  title: 'About Page',
  name: 'aboutPage',
  type: 'document',
  fields: [
    {
      title: 'Reference Title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
    },
    {
      title: 'Founder image',
      name: 'founderImage',
      type: 'image',
    },
    {
      title: 'Founder title',
      name: 'founderTitle',
      type: 'string',
    },
    {
      title: 'Hero sub title',
      name: 'heroSubTitle',
      type: 'string',
    },
    {
      title: 'Hero title',
      name: 'heroTitle',
      type: 'array',
      of: [multiTypeBlock],
    },
    {
      title: 'Hero description',
      name: 'heroDescription',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Services list',
      name: 'servicesList',
      type: 'array',
      of: [
        {
          title: 'Service',
          name: 'service',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'List items',
              name: 'listItems',
              type: 'array',
              of: [
                {
                  title: 'List item',
                  name: 'listItem',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Our people title',
      name: 'ourPeopleTitle',
      type: 'array',
      of: [multiTypeBlock],
    },
    {
      title: 'People',
      name: 'people',
      type: 'array',
      of: [
        {
          title: 'Person',
          name: 'person',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Position',
              name: 'position',
              type: 'string',
            },
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            },
          ],
        },
      ],
    },
  ],
}
