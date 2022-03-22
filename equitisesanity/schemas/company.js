export default {
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'goal',
      title: 'Goal',
      type: 'number',
    },
    {
      name: 'minimum',
      title: 'Minimum Target',
      type: 'number',
    },
    {
      name: 'shares',
      title: 'Total Shares',
      type: 'number',
    },

    {
      name: 'price',
      title: 'Share Price',
      type: 'number',
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'string',
    },
    {
      name: 'start',
      title: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'close',
      title: 'Close Date',
      type: 'datetime',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Description',
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Description',
        },
      ],
    },
  ],
};
