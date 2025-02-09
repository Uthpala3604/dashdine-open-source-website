const express = require("express");
const router = express.Router();
const {getReviewsByvendor, addReview} = require("../controllers/customerController");

//Get all customers
router.get("/", getAllCustomers);

//get a specific customer
router.post("/:id", getCustomerById);

module.exports =router;