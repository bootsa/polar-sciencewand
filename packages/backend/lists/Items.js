const { Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    user: { type: Relationship, ref: 'User.items', isRequired: true },
    coreItem: { type: Relationship, ref: 'BasicIdea' },
    mapPosition: { type: Text }
  }
}