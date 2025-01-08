const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Product = require("./models/Products.model");

const app = express();
const port = 5000;
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/populate", {});

// User POST route
app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Product POST route
app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get User by ID with populated productsOwned field
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("productsOwned");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get Product by ID with populated owner field
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("ownedBy");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server runnings on http://localhost:${port}`);
});
