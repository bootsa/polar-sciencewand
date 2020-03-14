const { DateTime, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    coreItem: { type: Relationship, ref: 'BasicIdea' },
    author: { type: Relationship, ref: 'Author.items', isRequired: true },
    collections: { type: Relationship, ref: 'Collection.items', many: true },
    sectionTemplate: { type: Relationship, ref: 'SectionTemplate' },
    // replace with custom field?
    // createdAt: { type: DateTime },
    // updatedAt: { type: DateTime }
  }
}