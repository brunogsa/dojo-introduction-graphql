const candidatesData = require('../data-sources/candidates.json');

const getCandidateById = (id) => {
  const candidate = candidatesData[id];
  if (!candidate) return null;

  candidate.id = id;
  return candidate;
};

const getCandidateByEmail = (email) => {
  const candidates = Object.keys(candidatesData).map(key => {
    const candidate = candidatesData[key];

    return {
      id: key,
      ...candidate,
    };
  });

  return candidates.find(
    candidate => candidate.email === email,
  );
};

const resolver = {
  candidate: ({ id, email }) => {
    if (id) return getCandidateById(id);
    if (email) return getCandidateByEmail(email);
    throw new Error('Specify either an "id" or the "email"');
  },

  Candidate_id: (candidate) => candidate.id,
  Candidate_name: (candidate) => candidate.name,
  Candidate_email: (candidate) => candidate.email,
  Candidate_profession: (candidate) => candidate.profession,
  Candidate_photo: (candidate) => candidate.photo,
  Candidate_following: (candidate) => candidate.following,
};

module.exports = resolver;
