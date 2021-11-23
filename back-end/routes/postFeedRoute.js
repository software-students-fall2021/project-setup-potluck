const express = require('express');
const router = require("express").Router(); // Router object to define a route
const mockaroo = require("mockaroo")
const axios = require("axios")
const postModel = require("../models/postModel")

console.log("fine here")
const postfeed = async (req, res) => {
    try {
        console.log("AXIOS RESULTS")
        // const response = await axios('https://api.mockaroo.com/api/6876d7a0?count=1000&key=f9dbb980')
        // const data = response.data // Extract data from mockaroo
        const data = await postModel.find({}).exec();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

router.route("/").post((req, res) => {
    postfeed(req, res);
});
console.log("fine here")
module.exports = postfeed;