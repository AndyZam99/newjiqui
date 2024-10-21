export default {
    name: 'categoria',
    title: 'Categoría',
    type: 'document',
    fields: [
      {
        name: 'nombre',
        title: 'Nombre',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; warning: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(50).warning('El nombre debe tener entre 1 y 50 caracteres.'),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'nombre',
          maxLength: 96,
        },
      },
    ],
  };
  