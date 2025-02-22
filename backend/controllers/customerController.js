const Customer = require("../models/Customer");

// Fetch all customers
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Fetch a single customer by ID
const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: "Customer not found" });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getAllCustomers, getCustomerById };
