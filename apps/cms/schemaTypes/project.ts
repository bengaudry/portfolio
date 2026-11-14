import {defineType, defineField, defineArrayMember} from 'sanity'
import {CubeIcon} from '@sanity/icons/Cube'

export const project = defineType({
  name: 'project',
  type: 'document',
  icon: CubeIcon,
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
      name: 'description',
      type: 'localeText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'state',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'In development', value: 'development'},
          {title: 'Inactive', value: 'inactive'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
      initialValue: 'active',
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Web', value: 'web'},
          {title: 'Low level', value: 'low-level'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isPersonal',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'linkLabel',
      type: 'localeString',
      hidden: ({parent}) => !parent?.link,
    }),
    defineField({
      name: 'repoUrl',
      type: 'url',
    }),
    defineField({
      name: 'associatedSkills',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'skill'}]})],
    }),
    defineField({
      name: 'highlighted',
      type: 'boolean',
      description: 'Show this project in the highlighted projects section.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Display order within its category (lower first).',
    }),
  ],
  preview: {
    select: {
      title: 'title.fr',
      category: 'category',
      state: 'state',
      media: 'image',
    },
    prepare({title, category, state, media}) {
      return {
        title: title || 'Sans titre',
        subtitle: [category, state].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
