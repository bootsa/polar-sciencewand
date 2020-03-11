const { DateTime, Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    coreItem: { type: Relationship, ref: 'BasicIdea' },
    author: { type: Relationship, ref: 'Author.items', isRequired: true },
    collections: { type: Relationship, ref: 'Collection.items', many: true },
  }
}