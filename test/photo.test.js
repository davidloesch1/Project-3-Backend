const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:8080");

//Run test on 200 response - good

describe("GET /api/comment", () => {
    it("Should return a 200 response", done => {
      api
        .get("/api/comment")
        .set("Accept", "application/json")
        .expect(200, done);
    });
  
    //return and array - good
    it("should return an array", function(done) {
      api
        .get("/api/comment")
        .set("Accept", "application/json")
        .end(function(error, response) {
          expect(response.body).to.be.an("array");
          done();
        });
    });

    //return a title from schema - good
    it("should return a field called 'title' ", function(done) {
        api
          .get("/api/comment")
          .set("Accept", "application/json")
          .end(function(error, response) {
            expect(response.body[0]).to.have.property("title");
            done();
          });
      });

//works for the posting code for images - pass
      describe("POST /api/images", function() {
        before(function(done) {
          api
            .post("/api/images")
            .set("Accept", "application/json")
            .send({
              title: "Make",
              genre: "winter",
              path: "",
             
            })
            .end(done);
        });
    
        it("should return an object for images", function(done) {
            api
              .get("/api/images")
              .set("Accept", "application/json")
              .end(function(error, response) {
                expect(response.body.length).to.greaterThan(1);
              });
              done();
          });
        });
})

