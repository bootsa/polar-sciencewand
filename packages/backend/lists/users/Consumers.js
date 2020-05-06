const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    slug: { type: Text, isRequired: true },
    name: { type: Text },
    cohort: { type: Relationship, ref: 'Cohort.consumers' },
    items: { type: Relationship, ref: 'ConsumerItem.consumer', many: true },
    connections: { type: Relationship, ref: 'ConsumerConnection.consumer', many: true },
  }
}