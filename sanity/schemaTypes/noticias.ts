export default {
  name: 'noticia',
  title: 'Noticias',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; warning: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(10).max(100).warning('El título debe tener entre 10 y 100 caracteres.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'categoria' }], 
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'autor',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'autor' }],
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'contenido',
      title: 'Contenido',
      type: 'blockContent',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'fechaPublicacion',
      title: 'Fecha de Publicación',
      type: 'datetime',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'imagenDestacada',
      title: 'Imagen Destacada',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
