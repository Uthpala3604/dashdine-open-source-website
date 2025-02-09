const express = require("express");
const router = express.Router();
const {getAllVendors, getVendorById, addVendor, updateVendor, deleteVendor} = require("../controllers/vendorController");

//Get all vendors
router.get("/", getAllVendors);

//Get a single vendor by ID
router.get("/:id", getVendorById);

//Add a new vendor
router.post("/", addVendor);

//Update vendor details
router.put("/:", updateVendor);

//Deleter a vendor
router.delete("/:id", deleteVendor);

module.exports = router;
