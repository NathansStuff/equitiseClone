export default {
  name: 'newsfeed',
  type: 'document',
  title: 'Newsfeed',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'tag',
      type: 'string',
      title: 'Tag',
      options: {
        list: [
          { title: 'Success Story', value: 'success' },
          { title: 'News', value: 'news' },
          { title: 'Deal', value: 'deal' },
        ],
      },
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'string',
    },
    {
      name: 'linktext',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link to',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
  ],
};
