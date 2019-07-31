const {
  getAllCompanies,
  getCompanyById,
} = require('../services/companies');

const { getJobAdById } = require('../services/jobAds');

const resolver = {
  Query: {
    companies: () => getAllCompanies(),

    company: (_, params, req, advancedDetails) => {
      const { id } = params;
      return getCompanyById(id);
    },
  },

  Company: {
    id:         (company) => company.id,
    name:       (company) => company.name,
    photo:      (company) => company.photo,
    openJobAds: (company) => company.openJobAds.map(getJobAdById),
  },
};

module.exports = resolver;
