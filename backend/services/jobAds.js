const jobAdsData = require('../data-sources/job-ads.json');

const getAllJobAds = () => {
  const jobAds = Object.keys(jobAdsData).map(key => {
    const jobAd = jobAdsData[key];

    return {
      id: key,
      ...jobAd,
    };
  });

  return jobAds;
};

const getJobAdById = (id) => {
  const jobAd = jobAdsData[id];
  if (!jobAd) return null;

  jobAd.id = id;
  return jobAd;
};

module.exports = {
  getAllJobAds,
  getJobAdById,
};
