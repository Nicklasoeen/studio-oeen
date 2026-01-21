import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Kundenavn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industri',
      type: 'string',
      description: 'Hvilken bransje er kunden i? (f.eks. Snekker, Restaurant, Eiendom)',
    }),
    defineField({
      name: 'categories',
      title: 'Kategorier',
      type: 'array',
      description: 'Hva slags type prosjekt er dette? Velg en eller flere.',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Nettside', value: 'nettside' },
          { title: 'System', value: 'system' },
          { title: 'Grafisk', value: 'grafisk' },
          { title: 'App', value: 'app' },
          { title: 'E-handel', value: 'e-handel' },
          { title: 'Innholdsproduksjon', value: 'innholdsproduksjon' },
        ],
      },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'subheading',
      title: 'Underoverskrift',
      type: 'text',
      rows: 2,
      description: 'Stor overskrift som vises under hovedbildet (f.eks. "En tydeligere og mer strukturert landingsside som fremhever bedriftens profesjonalitet")',
    }),
    defineField({
      name: 'excerpt',
      title: 'Kort beskrivelse',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galleri (Bilder & Video)',
      type: 'array',
      description: 'Last opp bilder og/eller korte videosnutter',
      of: [
        {
          type: 'image',
          title: 'Bilde',
          options: {
            hotspot: true,
          },
        },
        {
          type: 'file',
          title: 'Video',
          options: {
            accept: 'video/*',
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Beskrivelse',
              description: 'Kort beskrivelse av videoen',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'completedAt',
      title: 'Completion Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Display this project prominently on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      description: 'Lavere tall vises først. La stå tom for å sortere etter dato.',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Rekkefølge',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'completedAt', direction: 'desc'},
      ],
    },
    {
      title: 'Fullført dato',
      name: 'completedAtDesc',
      by: [{field: 'completedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'mainImage',
      order: 'order',
    },
    prepare(selection) {
      const {title, client, order} = selection
      const orderText = order !== undefined ? `#${order}` : ''
      return {
        title: orderText ? `${orderText} - ${title}` : title,
        subtitle: client ? `Kunde: ${client}` : 'Ingen kunde satt',
        media: selection.media,
      }
    },
  },
})

