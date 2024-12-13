const mongoose = require("mongoose");
const Product = require("../../models/Products.model");

// MongoDB connection URI
const dbURI = "mongodb://localhost:27017/nodejs";

// Connect to MongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Example to insert a new product
const newProduct = new Product({
    name: 'Smartwatch Pro',
    description: 'Smartwatch with fitness tracking, heart rate monitor, and long battery life',
    category: 'Wearable Technology',
    subCategory: 'Smartwatches',
    price: 8000,
    brand: 'Fitbit',
    images: ['smartwatch1.jpg', 'smartwatch2.jpg'],
    tags: ['smartwatch', 'wearable technology', 'fitness'],
    specifications: {
      weight: '0.3kg',
      dimensions: '1.7 x 1.7 x 0.5 inches',
      color: 'Black',
      material: 'Rubber and Steel'
    },
    discount: 5
  });

newProduct
  .save()
  .then(() => console.log("Product saved successfully"))
  .catch((err) => console.log("Error saving product", err));
