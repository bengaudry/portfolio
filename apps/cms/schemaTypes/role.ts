import {defineType, defineField, defineArrayMember} from 'sanity'
import {ClockIcon} from '@sanity/icons/Clock'

export const role = defineType({
  name: 'role',
  type: 'object',
  icon: ClockIcon,
  fields: [
    defineField({
      name: 'position',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      type: 'localeString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      type: 'localeText',
    }),
    defineField({
      name: 'associatedSkills',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'skill'}]})],
    }),
  ],
  preview: {
    select: {
      position: 'position.fr',
      duration: 'duration.fr',
    },
    prepare({position, duration}) {
      return {
        title: position || 'Nouveau poste',
        subtitle: duration || '',
      }
    },
  },
})
