const fs = require('fs');
const express = require('express');
const app = express();
const { graphql, buildSchema } = require('graphql');
const graphqlHttp = require('express-graphql');

const PORT = 3000;
const graphqlTypes = fs.readFileSync('./schema.graphql', 'utf8');
const graphqlSchema = buildSchema(graphqlTypes);
const resolvers = require('./resolvers');

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/graphql 🚀`);
});
