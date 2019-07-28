/**
 * @see: https://graphql.org/graphql-js/type/#graphqlschema
 */
const { GraphQLScalarType } = require('graphql');

const resolver = {
  Email: new GraphQLScalarType({
    name: 'Email',
    description: 'An email address',

    serialize: (value) => value,

    parseValue: (value) => {
      const isValid = value.match(/[a-zA-Z0-9._]@[a-z][.]com/g);
      if (!isValid) throw new Error('Invalid email format');

      return value;
    },

    parseLiteral: (ast) => ast.value,
  }),
};

module.exports = resolver;
