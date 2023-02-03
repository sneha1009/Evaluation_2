const express = require("express")
const Router = express.Router()
const controller = require("../controllers/companyDetails.controller");

Router.post("/api/save", controller.postDetails);

module.exports = Router;
