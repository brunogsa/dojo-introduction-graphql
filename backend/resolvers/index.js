const fs = require('fs');

const queriesResolvers = {};

fs.readdirSync('./resolvers')
  .map(
    fullName => fullName.split('.')[0]
  )
  .filter(
    fileName => fileName !== 'index'
  )
  .forEach(fileName => {
    queriesResolvers[fileName] = require(`./${fileName}`);
  });


module.exports = {
  Query: queriesResolvers,
};
