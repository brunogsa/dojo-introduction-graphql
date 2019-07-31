const {
  getAllJobAds,
} = require('../services/jobAds');

const resolver = {
  Query: {
    // TODO jobAds: () => {},
  },

  JobAd: {
    id: (jobAd) => jobAd.id,
    // TODO
  },
};

module.exports = resolver;
