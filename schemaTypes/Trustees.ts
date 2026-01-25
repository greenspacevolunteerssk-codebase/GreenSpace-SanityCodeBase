import { defineField,defineType } from "sanity";
export default defineType({
  name: 'Trustees',
  title: 'Trustees',
  type: 'document',
  fields:[
    defineField({
      name: 'trusteeName',
      title: 'Trustee Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trusteeRole',
      title: 'Trustee Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trusteeImage',
      title: 'Trustee Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    })
]
});