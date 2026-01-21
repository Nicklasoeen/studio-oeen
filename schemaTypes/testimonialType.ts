import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Sitat',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Navn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Stilling / Rolle',
      type: 'string',
      description: 'F.eks. "CEO hos Bedrift AS"',
    }),
    defineField({
      name: 'image',
      title: 'Bakgrunnsbilde',
      type: 'image',
      description: 'Stort bilde fra prosjektet som vises i bakgrunnen',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logo',
      title: 'Kundelogo',
      type: 'image',
      description: 'Logo til kunden (vises øverst i hjørnet)',
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: 'project',
      title: 'Tilknyttet prosjekt',
      type: 'reference',
      to: [{type: 'project'}],
      description: 'Valgfritt: Link til prosjektet dette sitatet er fra',
    }),
    defineField({
      name: 'featured',
      title: 'Vis på forsiden',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      description: 'Lavere tall vises først',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'role',
      media: 'image',
    },
  },
})

