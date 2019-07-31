const companiesData = require('../data-sources/companies.json');

const getAllCompanies = () => {
  return companiesData;
};

const getCompanyById = (id) => {
  return companiesData.find(
    company => company.id == id,
  );
};

module.exports = {
  getAllCompanies,
  getCompanyById,
};
