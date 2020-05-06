const { Relationship, Text } = require('@keystonejs/fields');
const { Markdown } = require('@keystonejs/fields-markdown');

module.exports = {
  fields: {
    name: { type: Text, isRequired: true },
    description: { type: Markdown },
    style: { type: Relationship, ref: 'CategoryStyle' },
    children: { type: Relationship, ref: 'IntermediateIdea.parent', many: true }
  }
}