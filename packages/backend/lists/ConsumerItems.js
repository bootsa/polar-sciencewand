const { DateTime, Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    consumer: { type: Relationship, ref: 'Consumer.items', isRequired: true },
    coreItem: { type: Relationship, ref: 'BasicIdea' },
    mapPosition: { type: Text },
    addedToMapDate: { type: DateTime, yearRangeFrom: 2000, yearRange: 2040 },
  }
}