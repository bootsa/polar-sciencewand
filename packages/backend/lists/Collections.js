const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: { type: Text },
    description: { type: Text },
    items: { type: Relationship, ref: 'CollectionItem.collections', many: true },
    owner: { type: Relationship, ref: 'Author.collections', isRequired: true, many: true },
    cohortCollections: { type: Relationship, ref: 'CohortCollection.collectionSet', many: true },
  }
}