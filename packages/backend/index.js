require('dotenv-extended').load();

const { Keystone } = require('@keystonejs/keystone');

const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const AuthorSchema = require('./lists/users/Authors');
const ConsumerSchema = require('./lists/users/Consumers');
const UserSchema = require('./lists/users/Users');

const BasicIdeaSchema = require('./lists/items/core/BasicIdeas');
const BigIdeaSchema = require('./lists/items/core/BigIdeas');
const IntermediateIdeaSchema = require('./lists/items/core/IntermediateIdeas');

const CategoryMetaSchema = require('./lists/categories/CategoryMetas');
const OrganisationSchema = require('./lists/categories/Organisations');
const CohortCollectionSchema = require('./lists/categories/cohorts/CohortCollections');
const CohortSchema = require('./lists/categories/cohorts/Cohorts');

const CollectionSchema = require('./lists/categories/collections/Collections');

const CollectionItemSchema = require('./lists/items/collection/CollectionItems');

const ConsumerItemConnectionSchema = require('./lists/items/consumer/ConsumerItemConnections');
const ConsumerItemSchema = require('./lists/items/consumer/ConsumerItems');

const SectionItemSchema = require('./lists/sections/SectionItems');
const SectionLayoutSchema = require('./lists/sections/SectionLayouts');
const SectionTemplateSchema = require('./lists/sections/SectionTemplates');

const initialiseData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "Polar Star: Science Wand";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter({
    mongoUri: process.env.MONGO_HOST.startsWith('localhost') ? `mongodb://localhost:27017/${process.env.MONGO_DATABASE}?readPreference=primary&ssl=false` : `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
  }),
  onConnect: initialiseData,
});

keystone.createList('Author', AuthorSchema);
keystone.createList('BasicIdea', BasicIdeaSchema);
keystone.createList('BigIdea', BigIdeaSchema);
keystone.createList('CategoryMeta', CategoryMetaSchema);
keystone.createList('Cohort', CohortSchema);
keystone.createList('CohortCollection', CohortCollectionSchema);
keystone.createList('Collection', CollectionSchema);
keystone.createList('CollectionItem', CollectionItemSchema);
keystone.createList('Consumer', ConsumerSchema);
keystone.createList('ConsumerItem', ConsumerItemSchema);
keystone.createList('ConsumerItemConnection', ConsumerItemConnectionSchema);
keystone.createList('IntermediateIdea', IntermediateIdeaSchema);
keystone.createList('Organisation', OrganisationSchema);
keystone.createList('SectionItem', SectionItemSchema);
keystone.createList('SectionLayout', SectionLayoutSchema);
keystone.createList('SectionTemplate', SectionTemplateSchema);
keystone.createList('User', UserSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
