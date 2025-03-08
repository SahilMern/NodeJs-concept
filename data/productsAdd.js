const mongoose = require('mongoose');
const Product = require("./models/Products.model")

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
    discount: 10
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
    discount: 5
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
    discount: 15
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
    discount: 20
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
    discount: 25
  }
];

// Insert the products into MongoDB
Product.insertMany(products)
  .then(() => {
    console.log('Products added successfully');
    mongoose.disconnect();  // Disconnect after inserting the data
  })
  .catch(err => {
    console.log('Error inserting products:', err);
    mongoose.disconnect();  // Disconnect in case of error
  });
