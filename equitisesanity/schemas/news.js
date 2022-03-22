export default {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
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
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            fields: [
              {
                title: 'Position',
                name: 'position',
                type: 'string',
                options: {
                  list: [
                    { title: 'Center', value: 'center' },
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                  ],
                  layout: 'radio',
                  isHighlighted: true,
                },
              },
              {
                type: 'text',
                name: 'alt',
                title: 'Description',
                options: {
                  isHighlighted: true,
                },
              },
            ],
            options: {
              hotspot: true,
            },
          },
          {
            type: 'code',
            options: {
              withFilename: true,
            },
          },
        ],
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
        validation: Rule => Rule.required(),
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        validation: Rule => Rule.required(),
      },
    ],
  }