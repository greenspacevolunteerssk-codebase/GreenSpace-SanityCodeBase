import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'HeaderDetails',       // The unique key used in GROQ queries
  title: 'Header Details',      // The name displayed in the Studio UI
  type: 'document',     // Tells Sanity this is a top-level document
  fields: [
    defineField({
      name: 'Website_Title01',   // The unique key for this field
      title: 'Website Title 01',
      type: 'string',    // Specifies that this field is of type 'string'
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'Website_Title02',   // The unique key for this field
      title: 'Website Title 02',
      type: 'string',    // Specifies that this field is of type 'string'
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'IconImage',   // The unique key for this field
      title: 'Icon Image',
      type: 'image',    // Specifies that this field is of type 'image'
        validation: (Rule) => Rule.required(), // Makes this field mandator
    }),
],
})