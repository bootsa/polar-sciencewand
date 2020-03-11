const { Text, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    slug: { type: Text, isRequired: true, isUnique: true },
    name: { type: Text },
    loginInstruction: { type: Text },
    organisation: { type: Relationship, ref: 'Organisation.cohorts' },
    authors: { type: Relationship, ref: 'Author.cohorts', many: true },
    consumers: { type: Relationship, ref: 'Consumer.cohort', many: true },
    cohortCollections: { type: Relationship, ref: 'CohortCollection.cohort', many: true }
  }
}