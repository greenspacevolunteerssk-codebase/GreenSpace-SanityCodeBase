import { defineType, defineField } from "sanity";

export default defineType({
  name: "SpecialSponsor",
  title: "Special Sponsor",
  type: "document",
  fields: [
    defineField({
      name: "Special_Sponsor_Title",
      title: "Special Sponsor Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Special_Sponsor_Description",
      title: "Special Sponsor Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
      defineField({
      name: "Special_Sponsor_Logo",
      title: "Special Sponsor Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    }), 
],    
}); 