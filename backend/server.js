const fs = require('fs');
const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const PORT = 3000;

const graphqlTypes = fs.readFileSync('./schema.graphql', 'utf8');
const graphqlResolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: graphqlTypes,
  resolvers: graphqlResolvers,
});

server.applyMiddleware({ app });

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});
