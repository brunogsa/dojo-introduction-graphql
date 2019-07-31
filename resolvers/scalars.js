/**
 * @see: https://github.com/Urigo/graphql-scalars
 */
const {
  EmailAddress,
  URL,
  NonNegativeInt,
} = require('graphql-scalars');

const resolver = {
  EmailAddress,
  URL,
  NonNegativeInt,
};

module.exports = resolver;
