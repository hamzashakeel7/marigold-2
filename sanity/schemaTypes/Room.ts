import {Rule} from '@sanity/types'

export default {
  name: 'room',
  type: 'document',
  title: 'Room',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Room Name',
      description: 'Name or title of the room',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'images',
      type: 'array',
      title: 'Room Images',
      description: 'Upload multiple images of the room',
      of: [{type: 'image'}],
      options: {
        hotspot: true, // Enable cropping
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Room Description',
      description: 'Detailed description of the room',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'pricePerNight',
      type: 'number',
      title: 'Price per Night',
      description: 'Cost per night for the room',
      validation: (Rule: {
        required: () => {(): any; new (): any; positive: {(): any; new (): any}}
      }) => Rule.required().positive(),
    },
    {
      name: 'capacity',
      type: 'number',
      title: 'Capacity',
      description: 'Number of people this room can accommodate',
      validation: (Rule: {
        required: () => {(): any; new (): any; positive: {(): any; new (): any}}
      }) => Rule.required().positive(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Room Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Number of Bedrooms',
      validation: (Rule: {
        required: () => {(): any; new (): any; positive: {(): any; new (): any}}
      }) => Rule.required().positive(),
    },
    {
      name: 'extraFeatures',
      type: 'array',
      title: 'Extra Features',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Free Breakfast', value: 'freeBreakfast'},
              {title: 'Free Dinner', value: 'freeDinner'},
              {title: 'Free Wi-Fi', value: 'freeWifi'},
              {title: 'Pool Access', value: 'poolAccess'},
            ],
          },
        },
      ],
    },
    {
      name: 'likes',
      type: 'number',
      title: 'Likes',
      description: 'Number of likes for this room',
      initialValue: 0,
      readOnly: true,
    },
    {
      name: 'amenities',
      type: 'array',
      title: 'Amenities',
      description: 'Additional amenities provided in the room',
      of: [{type: 'string'}],
    },
  ],
}
