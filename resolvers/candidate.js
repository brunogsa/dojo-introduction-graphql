const {
  getAllCandidates,
  getCandidateById,
} = require('../services/candidates');

const resolver = {
  Query: {
    candidates: () => getAllCandidates(),

    // TODO candidate: (_, params, req, advancedDetails) => {},
  },

  Candidate: {
    id:         (candidate) => candidate.id,
    name:       (candidate) => candidate.name,
    email:      (candidate) => candidate.email,
    profession: (candidate) => candidate.profession,
    photo:      (candidate) => candidate.photo,
    following:  (candidate) => candidate.following.map(getCandidateById),
  },
};

module.exports = resolver;
