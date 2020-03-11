const { Text, Checkbox, Password, Relationship } = require('@keystonejs/fields');

// // Access control functions
// const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
// const userOwnsItem = ({ authentication: { item: user } }) => {
//   if (!user) {
//     return false;
//   }
//   return { id: user.id };
// };
// const userIsAdminOrOwner = auth => {
//   const isAdmin = access.userIsAdmin(auth);
//   const isOwner = access.userOwnsItem(auth);
//   return isAdmin ? isAdmin : isOwner;
// };
// const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

module.exports = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
    organisations: { type: Relationship, ref: 'Organisation.authors', many: true },
    cohorts: { type: Relationship, ref: 'Cohort.authors', many: true },
    collections: { type: Relationship, ref: 'Collection.owner', many: true },
    items: { type: Relationship, ref: 'CollectionItem.author', many: true },
  },
  // access: {
  //   read: access.userIsAdminOrOwner,
  //   update: access.userIsAdminOrOwner,
  //   create: access.userIsAdmin,
  //   delete: access.userIsAdmin,
  //   auth: true,
  // },
}