const {
  getAllCompanies,
} = require('../services/companies');

const { getJobAdById } = require('../services/jobAds');

const resolver = {
  Query: {
    companies: () => getAllCompanies(),

    // TODO: company: (_, params, req, advancedDetails) => {},
  },

  Company: {
    id:         (company) => company.id,
    name:       (company) => company.name,
    photo:      (company) => company.photo,
    openJobAds: (company) => company.openJobAds.map(getJobAdById),
  },
};

module.exports = resolver;
