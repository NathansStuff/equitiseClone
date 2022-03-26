export default {
    name: 'teamMember',
    type: 'document',
    title: 'Team Member',
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
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'blurb',
        title: 'Blurb',
        type: 'string',
      },
    ],
  }