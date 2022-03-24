export default {
  name: 'testimony',
  type: 'document',
  title: 'Testimony',
  fields: [
    {
      name: 'customer',
      type: 'reference',
      title: 'Customer',
      to: [
        {
          type: 'customer',
        },
      ],
      description: 'Who is making the testimony?',
    },
    {
      name: 'company',
      type: 'reference',
      title: 'Company',
      to: [
        {
          type: 'company',
        },
      ],
      description: 'What is the testimony about?',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type of Testimony',
      desctipion: 'What role did they play?',
      options: {
        list: [
          { title: 'Company (Seller)', value: 'company' },
          { title: 'Investor (Buyer)', value: 'investor' },
        ],
      },
    },
    {
      name: 'testimony',
      type: 'string',
      title: 'Testimony',
    },
  ],
};
