export default {
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
    //about
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
    },

    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'tag1',
      type: 'string',
      title: 'First Tag',
      options: {
        list: [
          { title: 'Raise Funds', value: 'raise-funds' },
          { title: 'Case Study', value: 'case-study' },
        ],
      },
    },

    {
      name: 'tag2',
      type: 'string',
      title: 'Second Tag',
      options: {
        list: [
          { title: 'Raise Funds', value: 'raise-funds' },
          { title: 'Case Study', value: 'case-study' },
        ],
      },
    },

    // Offer Details
    // Minimum and Maximum Company Goal
    {
      name: 'goal',
      title: 'Maximum Total to Raise)',
      type: 'number',
    },
    {
      name: 'minimum',
      title: 'Minimum Target to Raise',
      type: 'number',
    },
    // Offer
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
      name: 'minimumInvestment',
      title: 'Minimum Investment',
      type: 'number',
    },
    {
      name: 'maximumInvestment',
      title: 'Maximum Investment (Retail)',
      type: 'string',
    },
    {
      name: 'maximumInvestmentSophisticated',
      title: 'Maximum Investment (Sophisticated Investors)',
      type: 'string',
    },
    {
      name: 'fees',
      title: 'Fees Paid by Issuer',
      type: 'number',
    },
    {
      name: 'coolingOff',
      title: 'Cooling-Off Rights (Days)',
      type: 'number',
    },
    // Valuation
    {
      name: 'preValuation',
      title: 'Pre-Money Valuation (Equity)',
      type: 'number',
    },
    // Dates
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
    // Documents
    {
      name: 'doc1',
      title: 'Document A',
      type: 'file',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
      ]
    },
    {
      name: 'doc2',
      title: 'Document B',
      type: 'file',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
      ]
    },
    {
      name: 'doc3',
      title: 'Document C',
      type: 'file',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title'
        },
      ]
    },
    // Advertising / Info
    {
      name: 'blurb',
      title: 'Blurb',
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
    {
      name: 'video',
      title: 'Promotional Video',
      type: 'string',
    },
    // socials
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
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
  ],
};
