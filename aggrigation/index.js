const express = require("express");
const Product = require("./models/products");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/aggrigationinterview", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err });
  }
});

// Get all products
app.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

app.get("/match", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $match: {
          name: "Smartphone X1",
        },
      },
    ]);
    console.log(data, "data");
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/group", async (req, res) => {
  const data = await Product.aggregate([
    {
      $group: {
        _id: "Laptop Pro 15",
      },
    },
  ]);
  return res.status(200).json({
    data,
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
