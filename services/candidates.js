const candidatesData = require('../data-sources/candidates.json');

const getAllCandidates = () => {
  const candidates = Object.keys(candidatesData).map(key => {
    const candidate = candidatesData[key];

    return {
      id: key,
      ...candidate,
    };
  });

  return candidates;
};

const getCandidateById = (id) => {
  const candidate = candidatesData[id];
  if (!candidate) return null;

  candidate.id = id;
  return candidate;
};

const getCandidateByEmail = (email) => {
  const candidates = getAllCandidates();

  return candidates.find(
    candidate => candidate.email === email,
  );
};

module.exports = {
  getAllCandidates,
  getCandidateById,
  getCandidateByEmail,
};
