export default {
  name: 'teams',
  type: 'document',
  title: 'Teams',
  fields: [
    {
      title: 'Team Members',
      name: 'teamMember',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },
    {
      title: 'Team title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Team Subtitle',
      name: 'subtitle',
      type: 'string',
    },
  ],
};
