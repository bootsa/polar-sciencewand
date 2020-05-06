const { Color, Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  labelField: 'icon',
  fields: {
    icon: { type: Text },
    color: { type: Color },
    // parent: { type: Relationship, ref: 'IntermediateIdea', isRequired: true }
  }
}