const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    slug: { type: Text, isRequired: true, isUnique: true },
    name: { type: Text },
    authors: { type: Relationship, ref: 'Author.organisations', many: true },
    cohorts: { type: Relationship, ref: 'Cohort.organisation', many: true },
  }
}