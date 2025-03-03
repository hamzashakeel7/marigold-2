interface Comment {
  name: string
  type: string
  title: string
  fields: Field[]
}

interface Field {
  name: string
  type: string
  title: string
  validation?: (Rule: any) => any
  to?: {type: string}[]
  description?: string
  initialValue?: any
  options?: {
    dateFormat: string
    timeFormat: string
    timeStep: number
  }
}

const commentSchema: Comment = {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'room',
      type: 'reference',
      title: 'Room',
      to: [{type: 'room'}], // Reference to the room schema
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      description: "Comments won't show on the site without approval",
      initialValue: false,
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      initialValue: new Date().toISOString(),
    },
  ],
}

export default commentSchema
