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
});
