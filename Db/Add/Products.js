// const mongoose = require("mongoose");
// const Product = require("../../models/Products.model");

// // MongoDB connection URI
// const dbURI = "mongodb://localhost:27017/nodejs";

// // Connect to MongoDB
// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Failed to connect to MongoDB", err));

// // Example to insert a new product
// const newProduct = new Product({
//     name: 'New product',
//     description: 'Smartwatch with fitness tracking, heart rate monitor, and long battery life',
//     category: 'Wearable Technology',
//     subCategory: 'Smartwatches',
//     price: 8000,
//     brand: 'Fitbit',
//     images: ['smartwatch1.jpg', 'smartwatch2.jpg'],
//     tags: ['smartwatch', 'wearable technology', 'fitness'],
//     specifications: {
//       weight: '0.3kg',
//       dimensions: '1.7 x 1.7 x 0.5 inches',
//       color: 'Black',
//       material: 'Rubber and Steel'
//     },
//     discount: 5
//   });

// newProduct
//   .save()
//   .then(() => console.log("Product saved successfully"))
//   .catch((err) => console.log("Error saving product", err));


const mongoose = require("mongoose");
const Product = require("../../models/Products.model");

// MongoDB connection URI
const dbURI = "mongodb://localhost:27017/nodejs";

// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Example to insert multiple products
const products = [
  {
    name: 'Smartphone ABC',
    description: 'High-end smartphone with amazing features',
    category: 'Electronics',
    subCategory: 'Smartphones',
    price: 1999.99,
    brand: 'BrandX',
    images: ['smartphone1.jpg', 'smartphone2.jpg'],
    tags: ['smartphone', 'electronics', 'high-end'],
    specifications: {
      weight: '0.2kg',
      dimensions: '5.5 x 2.7 x 0.3 inches',
      color: 'Black',
      material: 'Aluminum and Glass'
    },
    discount: 10
  },
  {
    name: 'Laptop XYZ',
    description: 'A powerful laptop for work and gaming',
    category: 'Electronics',
    subCategory: 'Laptops',
    price: 3500.00,
    brand: 'BrandY',
    images: ['laptop1.jpg', 'laptop2.jpg'],
    tags: ['laptop', 'electronics', 'gaming'],
    specifications: {
      weight: '1.5kg',
      dimensions: '14.2 x 9.3 x 0.7 inches',
      color: 'Silver',
      material: 'Aluminum'
    },
    discount: 15
  },
  {
    name: 'Wireless Headphones',
    description: 'Noise-cancelling wireless headphones',
    category: 'Electronics',
    subCategory: 'Audio',
    price: 150.00,
    brand: 'BrandZ',
    images: ['headphone1.jpg', 'headphone2.jpg'],
    tags: ['headphones', 'audio', 'wireless'],
    specifications: {
      weight: '0.25kg',
      dimensions: '7.1 x 6.7 x 3.2 inches',
      color: 'White',
      material: 'Plastic and Rubber'
    },
    discount: 20
  },
  {
    name: 'Smartwatch Pro',
    description: 'A smartwatch with fitness tracking features',
    category: 'Wearable Technology',
    subCategory: 'Smartwatches',
    price: 499.99,
    brand: 'BrandA',
    images: ['watch1.jpg', 'watch2.jpg'],
    tags: ['smartwatch', 'wearable', 'fitness'],
    specifications: {
      weight: '0.4kg',
      dimensions: '1.8 x 1.8 x 0.4 inches',
      color: 'Grey',
      material: 'Silicone and Steel'
    },
    discount: 10
  },
  {
    name: 'Gaming Console 2025',
    description: 'Next-gen gaming console with amazing graphics',
    category: 'Electronics',
    subCategory: 'Consoles',
    price: 499.99,
    brand: 'BrandB',
    images: ['console1.jpg', 'console2.jpg'],
    tags: ['gaming', 'electronics', 'console'],
    specifications: {
      weight: '2.5kg',
      dimensions: '12 x 8 x 3 inches',
      color: 'Black',
      material: 'Plastic'
    },
    discount: 30
  },
  {
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with excellent sound quality',
    category: 'Electronics',
    subCategory: 'Audio',
    price: 120.00,
    brand: 'BrandC',
    images: ['speaker1.jpg', 'speaker2.jpg'],
    tags: ['speaker', 'audio', 'portable'],
    specifications: {
      weight: '0.5kg',
      dimensions: '7 x 7 x 3 inches',
      color: 'Blue',
      material: 'Plastic'
    },
    discount: 5
  }
];

// Insert multiple products
Product.insertMany(products)
  .then(() => console.log("Products added successfully"))
  .catch((err) => console.log("Error adding products", err));
