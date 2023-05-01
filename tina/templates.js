export function blog_postFields() {
  return [
    {
      type: 'string',
      name: 'title',
      label: 'title',
    },
    {
      type: 'string',
      name: 'description',
      label: 'description',
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'date',
    },
    {
      type: 'string',
      name: 'redirect_from',
      label: 'redirect_from',
      list: true,
    },
    {
      type: 'string',
      name: 'tags',
      label: 'tags',
      list: true,
    },
    {
      type: 'image',
      name: 'hero',
      label: 'hero',
    },
  ]
}
