const express = require("express");
const router = express.Router();
const{registerUser, loginUser} = require("../controllers/authController");

//Registr a new user(vendor or customer)
router.post("/register", registerUser);

//Login a user
router.post("/login", loginUser);

module.exports = router;