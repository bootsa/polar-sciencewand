const { DateTime, Relationship, Text } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

module.exports = {
  fields: {
    name: { type: Text, isRequired: true },
    description: { type: Markdown },
    consumer: { type: Relationship, ref: 'Consumer.connections', isRequired: true },
    items: { type: Relationship, ref: 'BasicIdea', many: true },
    created: { type: DateTime, yearRangeFrom: 2000, yearRange: 2040 },
  }
}