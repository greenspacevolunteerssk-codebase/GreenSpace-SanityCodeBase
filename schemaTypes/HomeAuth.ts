import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'MainPage',       // The unique key used in GROQ queries
  title: 'Main Page',      // The name displayed in the Studio UI
  type: 'document',     // Tells Sanity this is a top-level document
  fields: [
    defineField({
      name: 'MainPageTitle_noColor',   // The unique key for this field
      title: 'Main Page Title (No Color)',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'MainPage_Color',   // The unique key for this field
      title: 'Main Page Color',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'MainPage_Quote',   // The unique key for this field
      title: 'Main Page Quote',
      type: 'string',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'MainPage_Image',   // The unique key for this field
      title: 'Main Page Image',
      type: 'image',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'MainPage_Bags_Of_Litter_Removed',   // The unique key for this field
      title: 'Main Page Bags Of Litter Removed',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'MainPage_Hours_of_Work',   // The unique key for this field
      title: 'Main Page Hours of Work',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
     defineField({
      name: 'MainPage_Active_Volunteers',   // The unique key for this field
      title: 'Main Page Active Volunteers',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'MainPage_Image_local_action',   // The unique key for this field
      title: 'Main Page Image local action',
      type: 'image',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    })
  ],
})