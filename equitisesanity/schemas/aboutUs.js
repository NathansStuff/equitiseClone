export default {
    name: 'aboutUsCard',
    type: 'document',
    title: 'About Us Card',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'string',
      },
      {
        name: 'link',
        title: 'Link Required?',
        type: 'boolean',
      },
      {
        name: 'href',
        title: 'Link to (href)',
        type: 'string',
      },
    ],
  }