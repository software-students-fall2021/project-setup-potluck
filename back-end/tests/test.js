import chai from 'chai';
import chaiHttp from 'chai-http';
import app from "../app";
//import '@babel/polyfill'
const assert = require("assert");

chai.use(chaiHttp);
chai.should();
chai.use(require('chai-json-schema'));

//created schema to test api call against
const postSchema = {
    //schema configuration
    title: "postSchema v1",
    type: 'object',
    required: ['title', 'imageURL', 'url', 'author', 'tags', 'objectID'],
    //the schema itself
    properties: {
        title: {type: 'string'},
        imageURL: {type: 'string'},
        url: {type: 'string'},
        author: {type: 'string'},
        tags: {type:'number'},
        object: {type: 'number'}
    }
}

//suite of tests for the search/feed route
describe("searchTests", ()=>{
    //testing the get request to see if it returns 200 level status (that it went through properly)
    describe("GET/", ()=>{
        it("should return a 200 request and and array of objects", (done) =>{
            //use chai to make a get request to the search route!
            chai.request(app)
            .get('/search')
            .end((err,res)=>{
                //console.log(res.body);
                //checks if request returns a 200 level response
                res.should.have.status(200);
                //checks to see if the response is an array
                res.body.should.be.a('array');
                //check to see if every element in the array is an object that adheres to a predefined schema
                res.body.forEach(element => {
                    element.should.be.jsonSchema(postSchema);
                });
                done();
            });
        });
    });

});

//basic primer for unit testing with mocha/chai:

//use describe() to define your test suite and then individual tests inside it's your suite's callback
//use it() to write the description of an individual test
//everything in your it() callback is part of that test, 
//you can use chai.request to make a request from the app and then .get('/your route')
//you can use should be and should have to check specific properties of whatever you are checking
//think of these as less verbose assertions made to be easier to read
//the rest is pretty self explanatory check out the documentation for chai, mocha, or any of the mocha plugins
//type in npm run name of test file  (so in this case npm run test) to run your tests
//type npm run coverage to take a look at a coverage report (this comes from istanbul-nyc)
//have a great day!
