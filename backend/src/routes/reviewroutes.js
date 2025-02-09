const express = require("express");
const router = express.Router();
const {getReviewsByvendor, addReview} = require("../controllers/customerController");

//Get reviews for a specific vendor
router.get("/:vendorId", getReviewsByvendor);

//add a review for a vendor
router.post("/:vendorId", addReview);

module.exports =router;