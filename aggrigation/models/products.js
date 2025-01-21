const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewerName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: { type: String },
  date: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  manufacturer: {
    name: { type: String, required: true },
    country: { type: String, required: true },
    established: { type: Date, required: true }
  },
  specifications: {
    color: { type: String },
    weight: { type: String },
    dimensions: { type: String }
  },
  reviews: [reviewSchema],  // Array of review objects
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
