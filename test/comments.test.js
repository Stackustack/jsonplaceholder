const request = require('supertest');
const tv4 = require('tv4');
const expect = require('chai').expect;

const app = require('../src/app')
const schema = require('./json_schemas/comments.schema')

let response
let body

describe('GET /comments', () => {
    before(async () => {
        response = await request(app).get('/comments')
        body = response.body
    })

    it('should return 200 status code', () => {
        expect(response.status).to.be.equal(200)
    })

    it("should include correct header with 'Content-Type' value", () => {
        expect(response.header['content-type']).to.include('application/json')
    })

    it('should return Array of exactly 500 items', () => {
        // Just making above assumtion based on JSONPlaceholder docs
        expect(body).to.be.an('array')
        expect(body.length).to.be.equal(500)
    });

    it('should have correct schema', () => {
        expect(tv4.validate(body, schema)).to.be.true;
    })
});