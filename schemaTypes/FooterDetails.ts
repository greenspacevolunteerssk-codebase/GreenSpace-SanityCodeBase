import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'FooterDetails',       // The unique key used in GROQ queries
  title: 'Footer Details',      // The name displayed in the Studio UI
  type: 'document',     // Tells Sanity this is a top-level document
  fields: [
    defineField({
      name: 'Footer_Contact_Email',   // The unique key for this field
      title: 'Footer Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'Footer_Phone_Number',   // The unique key for this field
      title: 'Footer Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'Footer_Address',   // The unique key for this field
      title: 'Footer Address',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Footer_Charity_Number',   // The unique key for this field
        title: 'Footer Charity Number',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Footer_Facebook',   // The unique key for this field
        title: 'Footer Facebook Link',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Footer_Twitter',   // The unique key for this field
        title: 'Footer Twitter Link',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Footer_Instagram',   // The unique key for this field
        title: 'Footer Instagram Link',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Footer_TikTok',   // The unique key for this field
        title: 'Footer TikTok Link',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
]   ,
});