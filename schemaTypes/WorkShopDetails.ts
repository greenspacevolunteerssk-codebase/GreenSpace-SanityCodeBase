import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'WorkShopDetails',       // The unique key used in GROQ queries
  title: 'WorkShop Details',      // The name displayed in the Studio UI
  type: 'document',     // Tells Sanity this is a top-level document
  fields: [
    defineField({
      name: 'WorkShopDetails_Title',   // The unique key for this field
      title: 'WorkShop Details Title',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'WorkShopDetails_Description',   // The unique key for this field
      title: 'WorkShop Details Description',
      type: 'text',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'WorkShopDetails_Image',   // The unique key for this field
      title: 'WorkShop Details Image',
      type: 'image',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
  ],
})