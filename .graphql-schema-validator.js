const fs = require('fs');
var { buildSchema } = require('graphql');

const graphqlTypes = fs.readFileSync('./schema.graphql', 'utf8');
buildSchema(graphqlTypes);
