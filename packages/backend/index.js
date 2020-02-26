require('dotenv-extended').load();

const { Keystone } = require('@keystonejs/keystone');

const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

const UsersSchema = require('./lists/Users');
const BigIdeaSchema = require('./lists/BigIdeas');
const IntermediateIdeaSchema = require('./lists/IntermediateIdeas');
const BasicIdeaSchema = require('./lists/BasicIdeas');
const ItemSchema = require('./lists/Items');

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

keystone.createList('User', UsersSchema);
keystone.createList('BigIdea', BigIdeaSchema);
keystone.createList('IntermediateIdea', IntermediateIdeaSchema);
keystone.createList('BasicIdea', BasicIdeaSchema);
keystone.createList('Item', ItemSchema);

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
