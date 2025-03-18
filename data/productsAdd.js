const mongoose = require('mongoose');
const Product = require('../models/Products.model'); // Ensure the path to your model is correct

// Product data
const products = [
  {
    name: "Smartphone XYZ",
    description: "A high-end smartphone with amazing features.",
    category: "Electronics",
    subCategory: "Smartphones",
    price: 599.99,
    isAvailable: true,
    brand: "BrandA",
    images: ["image1.jpg", "image2.jpg"],
    discount: 10,
    colors: ["red", "black", "blue"]
  },
  {
    name: "Laptop ABC",
    description: "A powerful laptop for work and gaming.",
    category: "Electronics",
    subCategory: "Laptops",
    price: 999.99,
    isAvailable: true,
    brand: "BrandB",
    images: ["laptop1.jpg", "laptop2.jpg"],
    discount: 5,
    colors: ["gray", "black"]
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones.",
    category: "Electronics",
    subCategory: "Audio",
    price: 199.99,
    isAvailable: true,
    brand: "BrandC",
    images: ["headphones1.jpg", "headphones2.jpg"],
    discount: 15,
    colors: ["black", "white"]
  },
  {
    name: "Smartwatch Pro",
    description: "A smartwatch with fitness tracking features.",
    category: "Wearables",
    subCategory: "Smartwatches",
    price: 299.99,
    isAvailable: true,
    brand: "BrandD",
    images: ["watch1.jpg", "watch2.jpg"],
    discount: 20,
    colors: ["black", "silver", "gold"]
  },
  {
    name: "Gaming Console",
    description: "Next-gen gaming console with amazing graphics.",
    category: "Electronics",
    subCategory: "Consoles",
    price: 499.99,
    isAvailable: false,
    brand: "BrandE",
    images: ["console1.jpg", "console2.jpg"],
    discount: 25,
    colors: ["black", "white"]
  },
  // Add more product objects as needed...
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nodejs', {})
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert the products into MongoDB
    return Product.insertMany(products);
  })
  .then(() => {
    console.log('Products added successfully');
    mongoose.disconnect(); // Disconnect after inserting the data
  })
  .catch(err => {
    console.log('Error inserting products:', err);
    mongoose.disconnect(); // Disconnect in case of error
  });
