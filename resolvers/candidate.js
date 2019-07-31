const {
  getAllCandidates,
} = require('../services/candidates');

const resolver = {
  Query: {
    // TODO candidates: () => {},
  },

  Candidate: {
    id: (candidate) => candidate.id,
    // TODO
  },
};

module.exports = resolver;
