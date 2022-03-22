export default {
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
  }