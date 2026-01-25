import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'UpcomingEvents',
  title: 'Upcoming Events',
  type: 'document',
  fields: [
    defineField({
      name: 'eventTitle',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDescription',
      title: 'Event Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventLocation',
      title: 'Event Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }), 
    defineField({
      name: 'eventImage',
      title: 'Event Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ]
});