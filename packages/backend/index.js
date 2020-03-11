require('dotenv-extended').load();

const { Keystone } = require('@keystonejs/keystone');

const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const AuthorSchema = require('./lists/Authors');
const BasicIdeaSchema = require('./lists/BasicIdeas');
const BigIdeaSchema = require('./lists/BigIdeas');
const CategoryMetaSchema = require('./lists/CategoryMetas');
const CohortCollectionSchema = require('./lists/CohortCollections');
const CohortSchema = require('./lists/Cohorts');
const CollectionSchema = require('./lists/Collections');
const CollectionItemSchema = require('./lists/CollectionItems');
const ConsumerItemConnectionSchema = require('./lists/ConsumerItemConnections');
const ConsumerItemSchema = require('./lists/ConsumerItems');
const ConsumerSchema = require('./lists/Consumers');
const IntermediateIdeaSchema = require('./lists/IntermediateIdeas');
const OrganisationSchema = require('./lists/Organisations');
const UserSchema = require('./lists/Users');

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
