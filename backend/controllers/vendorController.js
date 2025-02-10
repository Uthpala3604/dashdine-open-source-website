const Vendor = require("../models/Vendor");

// Fetch all vendors
const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Fetch a single vendor by ID
const getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) return res.status(404).json({ message: "Vendor not found" });
        res.json(vendor);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Add a new vendor
const addVendor = async (req, res) => {
    try {
        const { name, location, menu } = req.body;
        const newVendor = new Vendor({ name, location, menu });
        await newVendor.save();
        res.status(201).json(newVendor);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Update vendor details
const updateVendor = async (req, res) => {
    try {
        const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedVendor);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete a vendor
const deleteVendor = async (req, res) => {
    try {
        await Vendor.findByIdAndDelete(req.params.id);
        res.json({ message: "Vendor deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getAllVendors, getVendorById, addVendor, updateVendor, deleteVendor };
