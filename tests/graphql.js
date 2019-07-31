const app = require('../server');

const request = require('supertest');
const { expect } = require('chai');

describe('POST /graphql', function() {
  it('test query "candidates"', () => {
    const graphlQuery = `
      query {
        candidates {
          name

          following {
            name
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('candidates');

        data.candidates.forEach(candidate => {
          expect(candidate).to.have.property('name');
          expect(candidate).to.have.property('following');

          candidate.following.forEach(followee => {
            expect(followee).to.have.property('name');
          });
        });
      })
    ;
  });

  it('test query "candidate" with id', () => {
    const graphlQuery = `
      query {
        candidate(id: 1) {
          id
          name
          email
          profession
          photo

          following {
            name
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('candidate');
        expect(data.candidate).to.have.property('id');
        expect(data.candidate).to.have.property('name');
        expect(data.candidate).to.have.property('email');
        expect(data.candidate).to.have.property('profession');
        expect(data.candidate).to.have.property('photo');

        data.candidate.following.forEach(folowee => {
          expect(folowee).to.have.property('name');
        });
      })
    ;
  });

  it('test query "candidate" with email', () => {
    const graphlQuery = `
      query {
        candidate(email: "sandrinha@gmail.com") {
          id
          name
          email
          profession
          photo

          following {
            name
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('candidate');
        expect(data.candidate).to.have.property('id');
        expect(data.candidate).to.have.property('name');
        expect(data.candidate).to.have.property('email');
        expect(data.candidate).to.have.property('profession');
        expect(data.candidate).to.have.property('photo');

        data.candidate.following.forEach(folowee => {
          expect(folowee).to.have.property('name');
        });
      })
    ;
  });

  it('test query "companies"', () => {
    const graphlQuery = `
      query {
        companies {
          name

          openJobAds {
            title
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('companies');

        data.companies.forEach(jobAd => {
          expect(jobAd).to.have.property('name');
          expect(jobAd).to.have.property('openJobAds');

          jobAd.openJobAds.forEach(jobAd => {
            expect(jobAd).to.have.property('title');
          });
        });
      })
    ;
  });

  it('test query "company"', () => {
    const graphlQuery = `
      query {
        company(id: 666) {
          id
          name
          photo

          openJobAds {
            title
            remainingVacancies
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('company');
        expect(data.company).to.have.property('id');
        expect(data.company).to.have.property('name');
        expect(data.company).to.have.property('photo');

        data.company.openJobAds.forEach(jobAd => {
          expect(jobAd).to.have.property('title');
          expect(jobAd).to.have.property('remainingVacancies');
        });
      })
    ;
  });

  it('test query "jobAds"', () => {
    const graphlQuery = `
      query {
        jobAds {
          title

          forCompany {
            name
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('jobAds');

        data.jobAds.forEach(jobAd => {
          expect(jobAd).to.have.property('title');
          expect(jobAd).to.have.property('forCompany');
          expect(jobAd.forCompany).to.have.property('name');
        });
      })
    ;
  });

  it('test query "jobAd"', () => {
    const graphlQuery = `
      query {
        jobAd(id: 1) {
          id
          title
          description
          requiredProfession
          remainingVacancies

          forCompany {
            name
          }
        }
      }
    `;

    return request(app)
      .post('/graphql')
      .send({ query: graphlQuery })
      .expect(200)
      .then(res => {
        const body = res.body;
        expect(body).to.have.property('data');

        const data = body.data;
        expect(data).to.have.property('jobAd');
        expect(data.jobAd).to.have.property('id');
        expect(data.jobAd).to.have.property('title');
        expect(data.jobAd).to.have.property('description');
        expect(data.jobAd).to.have.property('requiredProfession');
        expect(data.jobAd).to.have.property('remainingVacancies');
        expect(data.jobAd).to.have.property('forCompany');
        expect(data.jobAd.forCompany).to.have.property('name');
      })
    ;
  });
});
