const {
  getAllCandidates,
  getCandidateById,
  getCandidateByEmail,
} = require('../services/candidates');

const resolver = {
  Query: {
    candidates: () => getAllCandidates(),

    candidate: (_, params, req, advancedDetails) => {
      const { id, email } = params;

      if (id) return getCandidateById(id);
      if (email) return getCandidateByEmail(email);
      throw new Error('Specify either an "id" or the "email"');
    },
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
