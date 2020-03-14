const { Integer, Relationship, Text } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

module.exports = {
  fields: {
    name: { type: Text, isRequired: true },
    description: { type: Markdown },
    gridSize: { type: Integer },
    layouts: { type: Relationship, ref: 'SectionLayout', many: true }
  }
}