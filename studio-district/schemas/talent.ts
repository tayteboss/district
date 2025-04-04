export default {
  title: 'Talent',
  name: 'talent',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Beauty', value: 'beauty'},
              {title: 'Consulting', value: 'consulting'},
              {title: 'Entertainment', value: 'entertainment'},
              {title: 'Fashion', value: 'fashion'},
              {title: 'Lifestyle', value: 'lifestyle'},
              {title: 'Parenting', value: 'parenting'},
              {title: 'Tech', value: 'tech'},
              {title: 'Travel', value: 'travel'},
              {title: 'Health & Fitness', value: 'sport'},
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Featured @ tag',
      name: 'featuredTag',
      type: 'string',
    },
    {
      title: 'Featured social link',
      name: 'featuredSocialLink',
      type: 'url',
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          title: 'Social Link',
          name: 'socialLink',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Hero thumbnail',
      name: 'heroThumbnail',
      type: 'image',
    },
    {
      title: 'Hero gallery',
      name: 'heroGallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
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
