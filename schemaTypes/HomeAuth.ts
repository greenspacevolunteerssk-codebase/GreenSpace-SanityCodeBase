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
      name: 'MainPage_Bags_Of_Litter_Removed_This_Year',   // The unique key for this field
      title: 'Main Page Bags Of Litter Removed This Year',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
      defineField({
      name: 'MainPage_Bags_Of_Litter_Removed_Last_Year',   // The unique key for this field
      title: 'Main Page Bags Of Litter Removed Last Year',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'MainPage_Hours_of_Work_This_Year',   // The unique key for this field
      title: 'Main Page Hours of Work This Year',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
      defineField({
      name: 'MainPage_Hours_of_Work_Last_Year',   // The unique key for this field
      title: 'Main Page Hours of Work Last Year',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'MainPage_Active_Volunteers_This_Year',   // The unique key for this field
      title: 'Main Page Active Volunteers This Years',
      type: 'number',
      validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
      name: 'MainPage_Active_Volunteers_Last_Year',   // The unique key for this field
      title: 'Main Page Active Volunteers Last Year',
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