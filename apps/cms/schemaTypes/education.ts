import {defineType, defineField} from 'sanity'
import {BookIcon} from '@sanity/icons/Book'

export const education = defineType({
  name: 'education',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'location',
      type: 'localeString',
    }),
    defineField({
      name: 'startYear',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endYear',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Display order in the education section (lower first).',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location.fr',
      media: 'logo',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Sans titre',
        subtitle,
        media,
      }
    },
  },
})
