import {defineType, defineField} from 'sanity'

export const localeMarkdown = defineType({
  name: 'localeMarkdown',
  type: 'object',
  fields: [
    defineField({
      name: 'fr',
      type: 'text',
      title: 'Français',
      description: 'Supports Markdown formatting',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      type: 'text',
      title: 'English',
      description: 'Supports Markdown formatting',
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
