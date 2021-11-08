import chai from 'chai';
import chaiHttp from 'chai-http';
import { ApiError } from 'mockaroo/lib/errors';
import app from "../app";
import '@babel/polyfill'
const assert = require("assert");

chai.use(chaiHttp);
chai.should();
chai.use(require('chai-json-schema'));

// ############### SCHEMAS TO TEST DB RESULTS ###############

// schema to test api call against the post's schema
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

// schema to test api call against the restaurant's schema
const restaurantSchema =  {
    // Schema config
    title: "restaurantSchema v1",
    type: 'object',
    required: ['id', 'name', 'number', 'address', 'no_posts', 'backgroundPic', 'location', 'locoPic', 'menuPopular', 'recipesPopular', 'menuPopularPics', 'menuMain', 'recipesMain', 'menuMainPics', 'beverages'],
    properties: {
        id: {type: 'number'},
        name: {type: 'string'},
        "number": {type: 'string'},
        "address": {type: 'string'},
        "no_posts": {type: 'number'},
        "backgroundPic": {type: 'string'},
        colors: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
            type: 'string'
            }
        },
        location: {
            type : 'object',
            items: { 
                longitude: {type : 'number'},
                latitude: {type : 'number'}
            },
        },
        logoPic: {type: 'string'},
        menuPopular: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        recipesPopular: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        menuPopularPics:{
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        menuMain: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        recipesMain: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        menuMainPics: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
        beverages: {
            type: 'array',
            minItems: 1,
            uniqueItems: true,
            items: {
                type: 'string'
            }
        },
    }
}

// ############### TESTS ###############

//suite of tests for the search/feed route
describe("searchTests", ()=>{
    //testing the get request to see if it returns 200 level status (that it went through properly)
    describe("GET/", ()=>{
       
        let error, response;
        //Makes request prior to all tests running
        before((done) =>{
            //use chai to make a get request to search route
            chai.request(app).get('/search').end((err, res)=>{
                //hoist error, response to the actual response, error variables
                error =err, response = res;
                //console.log(res);
                done();
            });
        });
        it("Request should return a valid 200 response", (done) =>{
            //use chai to make a get request to the search route!     
            //checks if request returns a 200 level response
            response.should.have.status(200);
            done();
        });
        it("Request should return an array", (done) =>{
           
            //checks to see if the response is an array
            response.body.should.be.a('array');
            done();
        })
        it("All Elements in the array should be objects that adhere to the postSchema used by the mockaroo api, the frontend, and eventually (but not yet) mongoDB", (done) =>{
            //check to see if every element in the array is an object that adheres to a predefined schema
            response.body.forEach(element => {
                element.should.be.jsonSchema(postSchema);
            });
            done();
        })
    });

});


//suite of tests for the search/feed route
describe("restaurants", ()=>{
    //testing the get request to see if it returns 200 level status (that it went through properly)
    describe("GET/", ()=>{
       
        let error, response;
        //Makes request prior to all tests running
        before((done) =>{

            //use chai to make a get request to search route
            chai.request(app).get('/restaurants').end((err, res)=>{
                //hoist error, response to the actual response, error variables
                error =err, response = res;
                //console.log(res);
                done();
            });
        });
        it("Request should return a valid 200 response", (done) =>{

            //use chai to make a get request to the restaurants route!     
            //checks if request returns a 200 level response
            response.should.have.status(200);
            done();
        });

        it("Request should return an array", (done) =>{
           
            //checks to see if the response is an array
            response.body.should.be.a('array');
            done();
        })

        it("All Elements in the array should be objects that adhere to the restaurantSchema used by the mockaroo api, the frontend, and eventually (but not yet) mongoDB", (done) =>{
            //check to see if every element in the array is an object that adheres to a predefined schema
            response.body.forEach(element => {
                element.should.be.jsonSchema(restaurantSchema);
            });
            done();
        })
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
//extra: hooks can let you do things before or after specific (or all) tests within your suite
//have a great day!
