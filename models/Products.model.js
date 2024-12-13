const mongoose = require('mongoose');


// Define the main product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  brand: {
    type: String,
    required: true
  },
  images: [{
    type: String // URL or path to the image
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  tags: [{
    type: String
  }],
  specifications: {
    weight: {
      type: String
    },
    dimensions: {
      type: String
    },
    color: {
      type: String
    },
    material: {
      type: String
    }
  },
  discount: {
    type: Number,
    default: 0
  }
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);
module.exports = Product;