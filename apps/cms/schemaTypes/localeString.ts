import {defineType, defineField} from 'sanity'

export const localeString = defineType({
  name: 'localeString',
  type: 'object',
  fields: [
    defineField({
      name: 'fr',
      type: 'string',
      title: 'Français',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      type: 'string',
      title: 'English',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      fr: 'fr',
      en: 'en',
    },
    prepare({fr, en}) {
      return {
        title: fr || en || 'Sans titre / Untitled',
      }
    },
  },
})
