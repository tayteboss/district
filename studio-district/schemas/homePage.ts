import {multiTypeBlock, mediaBlock} from '../objects'

export default {
  title: 'Home Page',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      title: 'Reference title',
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
    {
      title: 'Hero media',
      name: 'heroMedia',
      type: 'object',
      fields: mediaBlock,
    },
    {
      title: 'Portfolio title',
      name: 'portfolioTitle',
      type: 'array',
      of: [multiTypeBlock],
    },
    {
      title: 'Partners title',
      name: 'partnersTitle',
      type: 'string',
    },
    {
      title: 'Partners logos',
      name: 'partnersLogos',
      type: 'array',
      of: [
        {
          title: 'Partner Logo',
          name: 'partnerLogo',
          type: 'object',
          fields: [
            {
              title: 'Logo',
              name: 'logo',
              type: 'image',
            },
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Logo link',
              name: 'logoLink',
              type: 'url',
            },
          ],
        },
      ],
    },
    // Section here to reference talent as array
    {
      title: 'About title',
      name: 'aboutTitle',
      type: 'array',
      of: [multiTypeBlock],
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
      title: 'Gallery',
      name: 'gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            },
            {
              title: 'Aspect ratio',
              name: 'aspectRatio',
              type: 'string',
              options: {
                list: [
                  {title: 'Portrait', value: 'portrait'},
                  {title: 'Landscape', value: 'landscape'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            },
          ],
        },
      ],
    },
  ],
}
