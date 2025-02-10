const Review = require("../models/Review");

// Fetch reviews for a specific vendor
const getReviewsByVendor = async (req, res) => {
    try {
        const reviews = await Review.find({ vendorId: req.params.vendorId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// Add a review for a vendor
const addReview = async (req, res) => {
    try {
        const { rating, comment, userId } = req.body;
        const newReview = new Review({ vendorId: req.params.vendorId, userId, rating, comment });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getReviewsByVendor, addReview };
