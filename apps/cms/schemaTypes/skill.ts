import {defineType, defineField} from 'sanity'
import {StarIcon} from '@sanity/icons/Star'

export const skill = defineType({
  name: 'skill',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Front-end', value: 'front-end'},
          {title: 'Back-end', value: 'back-end'},
          {title: 'Tools', value: 'tools'},
          {title: 'Others', value: 'others'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
      subtitle: 'category',
      media: 'icon',
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
