import { defineType, defineField } from "sanity";

export default defineType({
  name: "SponsorDetails",
  title: "Sponsor Details",
  type: "document",
  fields: [
    defineField({
      name: "Sponsor_Name",
      title: "Sponsor Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Sponsor_Description",
      title: "Sponsor Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Sponsor_Type",
      title: "Sponsor Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }), 
      defineField({
      name: "Sponsor_Logo",
      title: "Sponsor Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }), 
],    
}); 