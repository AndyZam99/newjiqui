import { Rule } from '@sanity/types'; 

export default {
  name: 'autor',
  title: 'Autor',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50), 
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10).max(200), 
    },
    {
      name: 'foto',
      title: 'Foto del Autor',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(), 
    },
  ],
};
