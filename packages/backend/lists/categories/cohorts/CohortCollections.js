const { DateTime, Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: { type: Text },
    description: { type: Text },
    publishDate: { type: DateTime, yearRangeFrom: 2000, yearRange: 2040 },
    cohort: { type: Relationship, ref: 'Cohort.cohortCollections' },
    collectionSet: { type: Relationship, ref: 'Collection.cohortCollections' },
  }
}