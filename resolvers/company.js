const {
  getAllCompanies,
} = require('../services/companies');

const resolver = {
  Query: {
    // TODO companies: () => {},
  },

  Company: {
    id: (company) => company.id,
    // TODO
  },
};

module.exports = resolver;
