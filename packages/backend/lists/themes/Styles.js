// following https://material.io/design/color/the-color-system.html

const { Relationship, Text } = require('@keystonejs/fields');

module.exports = {
  fields: {
    name: { type: Text },
    description: { type: Text },
    icon: { type: Text },
    primaryColor: { type: Relationship, ref: 'ColorSet'},
    secondaryColor: { type: Relationship, ref: 'ColorSet'},
    surfaceColor: { type: Relationship, ref: 'ColorSet'},
    parent: { type: Relationship, ref: 'Style.children' },
    children: { type: Relationship, ref: 'Style.parent', many: true }
  }
}