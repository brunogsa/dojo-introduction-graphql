const fs = require('fs');
const { makeExecutableSchema } = require('graphql-tools');

const graphqlTypes = fs.readFileSync('./schema.graphql', 'utf8');

const schema = makeExecutableSchema({
  typeDefs: graphqlTypes,
  resolvers: {},
});
