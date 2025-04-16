const mongoose = require("mongoose");

// Define the main product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  brand: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  discount: {
    type: Number,
    default: 0,
  },

  addField: {
    name: {
      type: String,
    },
  },
});

// Create a model from the schema
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
