const fs = require('fs');

let resolvers = {};

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
  });


module.exports = resolvers;
