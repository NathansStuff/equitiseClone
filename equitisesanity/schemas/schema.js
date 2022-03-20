// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'customer',
      type: 'document',
      title: 'Customer',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'initials',
          title: 'Initials',
          type: 'string',
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
        },
      ],
    },
    {
      name: 'investment',
      type: 'document',
      title: 'Investment',
      fields: [
        {
          name: 'company',
          type: 'reference',
          title: 'Invested Company',
          to: [
            {
              type: 'company',
            },
          ],
          description: 'What company is being invested in?',
        },
        {
          name: 'person',
          type: 'reference',
          title: 'Investor',
          to: [
            {
              type: 'customer',
            },
          ],
          description: 'Who is doing the investing?',
        },
        {
          name: 'amount',
          type: 'number',
          title: 'Total Invested',
        },
      ],
    },
    {
      name: 'company',
      type: 'document',
      title: 'Company',
      fields: [
        {
          name: 'name',
          title: 'title',
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
      ],
    },
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
        },
      ],
    },
    {
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
    },
  ]),
});
