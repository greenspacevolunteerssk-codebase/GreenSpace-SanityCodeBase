import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'VolunteersData',       // The unique key used in GROQ queries
  title: 'Volunteers Data',      // The name displayed in the Studio UI
  type: 'document',     // Tells Sanity this is a top-level document
  fields: [
    defineField({
        name: 'Volunteer_First_Name',   // The unique key for this field
        title: 'Volunteer First Name',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Volunteer_Last_Name',   // The unique key for this field
        title: 'Volunteer Last Name',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Volunteer_Email',   // The unique key for this field
        title: 'Volunteer Email',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Volunteer_Interested_Roles',   // The unique key for this field
        title: 'Volunteer Interested Roles',
        type: 'array',
        of: [{type: 'string'}], 
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'Volunteer_Query',   // The unique key for this field
        title: 'Volunteer Query',
        type: 'string',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }),
    defineField({
        name: 'submittedAt',   // The unique key for this field
        title: 'Submitted At',
        type: 'datetime',
        validation: (Rule) => Rule.required(), // Makes this field mandatory
    }), 
 ],
});