import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export const article = defineType({
  name: 'article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title.fr',
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (!slug?.current) return 'Required'
          if (!/^[a-z0-9-]+$/.test(slug.current)) {
            return 'Slug must be lowercase with hyphens only'
          }
          return true
        }),
    }),
    defineField({
      name: 'summary',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'localeMarkdown',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'isPublished',
      type: 'boolean',
      description: 'Only published articles are visible on the website.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
      publishedAt: 'publishedAt',
      isPublished: 'isPublished',
      media: 'coverImage',
    },
    prepare({title, publishedAt, isPublished, media}) {
      const date = publishedAt ? new Date(publishedAt).toLocaleDateString('fr-FR') : 'Non publié'
      return {
        title: title || 'Sans titre',
        subtitle: `${isPublished ? 'Publié' : 'Brouillon'} · ${date}`,
        media,
      }
    },
  },
})
