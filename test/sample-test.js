var expect = require("chai").expect;
var request = require("supertest");
var app = require("../app.js");

describe('SampleTest', function () {
  describe('GET /', function () {
    it('return 200 OK', function (done) {
      request(app)
        .get("/")
        .expect(200, done);
    });
  });
});
