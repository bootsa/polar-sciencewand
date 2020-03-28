const { Color } = require('@keystonejs/fields');

module.exports = {
  fields: {
    color: { type: Color },
    colorOn: { type: Color },
    colorVariant: { type: Color },
  }
}