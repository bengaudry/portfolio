import {defineType, defineField, defineArrayMember} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export const company = defineType({
  name: 'company',
  type: 'document',
  icon: CaseIcon,
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
      name: 'roles',
      type: 'array',
      of: [defineArrayMember({type: 'role'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'order',
      type: 'number',
      description: 'Display order on the work experience section (lower first).',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      rolesCount: 'roles',
    },
    prepare({title, media, rolesCount}) {
      const count = Array.isArray(rolesCount) ? rolesCount.length : 0
      return {
        title,
        subtitle: `${count} role${count === 1 ? '' : 's'}`,
        media,
      }
    },
  },
})
