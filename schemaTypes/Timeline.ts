import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'history',
  title: 'History Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id', // This acts as your custom ID
      title: 'Timeline ID',
      type: 'slug',
      description: 'Click "Generate" or type a unique ID (e.g., "1", "2")',
      options: {
        source: 'title', // Optionally generates based on the title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: subtitle ? `Year: ${subtitle}` : 'No year set',
      }
    },
  },
})
