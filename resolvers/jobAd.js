const {
  getAllJobAds,
} = require('../services/jobAds');

const { getCompanyById } = require('../services/companies');

const resolver = {
  Query: {
    jobAds: () => getAllJobAds(),

    // TODO jobAd: (_, params, req, advancedDetails) => {},
  },

  JobAd: {
    id:                 (jobAd) => jobAd.id,
    title:              (jobAd) => jobAd.title,
    description:        (jobAd) => jobAd.description,
    forCompany:         (jobAd) => getCompanyById(jobAd.forCompany),
    requiredProfession: (jobAd) => jobAd.requiredProfession,
    remainingVacancies: (jobAd) => jobAd.remainingVacancies,
  },
};

module.exports = resolver;
