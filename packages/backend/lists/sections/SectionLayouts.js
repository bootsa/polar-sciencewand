const { Color, Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    position: { type: Text },
    style: { type: Relationship, ref: 'Style' },
    sectionItem: { type: Relationship, ref: 'SectionItem' }
  }
}