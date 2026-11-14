import {defineType, defineField} from 'sanity'

export const localeText = defineType({
  name: 'localeText',
  type: 'object',
  fields: [
    defineField({
      name: 'fr',
      type: 'text',
      title: 'Français',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      type: 'text',
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
        title: fr || en || 'Sans contenu / No content',
      }
    },
  },
})
