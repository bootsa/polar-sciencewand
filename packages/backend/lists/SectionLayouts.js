const { Color, Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    position: { type: Text },
    backgroundColor: { type: Color },
    // icon: ...
    sectionItem: { type: Relationship, ref: 'SectionItem' }
  }
}