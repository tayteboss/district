export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      title: 'Reference Title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
    },
    {
      title: 'Instagram URL',
      name: 'instagramUrl',
      type: 'url',
    },
    {
      title: 'TikTok URL',
      name: 'tiktokUrl',
      type: 'url',
    },
    {
      title: 'Facebook URL',
      name: 'facebookUrl',
      type: 'url',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Office Address',
      name: 'officeAddress',
      type: 'string',
    },
    {
      title: 'Office Google Maps Link',
      name: 'officeGoogleMapsLink',
      type: 'url',
    },
    {
      title: 'For brands button title',
      name: 'forBrandsButtonTitle',
      type: 'string',
    },
    {
      title: 'For brands button link',
      name: 'forBrandsButtonLink',
      type: 'string',
    },
    {
      title: 'For talent button title',
      name: 'forTalentButtonTitle',
      type: 'string',
    },
    {
      title: 'For talent button link',
      name: 'forTalentButtonLink',
      type: 'string',
    },
    {
      title: 'Terms & Conditions Content',
      name: 'termsAndConditions',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
