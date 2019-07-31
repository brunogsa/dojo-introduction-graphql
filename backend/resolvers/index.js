const fs = require('fs');

let resolvers = {};
let queryResolvers = {};

fs.readdirSync('./resolvers')
  .filter(
    fileName => fileName !== 'index.js'
  )
  .forEach(fileName => {
    const fileResolvers = require('./' + fileName);

    resolvers = {
      ...resolvers,
      ...fileResolvers,
    };

    if (!fileResolvers.Query) return;

    queryResolvers = {
      ...queryResolvers,
      ...fileResolvers.Query,
    };
  });

resolvers.Query = queryResolvers;

module.exports = resolvers;
