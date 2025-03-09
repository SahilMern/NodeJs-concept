const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;
require("./Db/connection/config");
app.use(express.json());

//?Updateing the product data
app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extract the ID from the URL
    const {
      name,
      description,
      category,
      subCategory,
      price,
      brand,
      images,
      discount,
    } = req.body; // Extract the fields to be updated

    // Create an update object, which will only contain the fields that were provided
    const updateData = {};

    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (category) updateData.category = category;
    if (subCategory) updateData.subCategory = subCategory;
    if (price !== undefined) updateData.price = price; // price can be 0, so we check !== undefined
    if (brand) updateData.brand = brand;
    if (images) updateData.images = images;
    if (discount !== undefined) updateData.discount = discount;

    // Find the product by ID and update it
    const product = await Product.findByIdAndUpdate(
      id,
      // { $set: updateData, $currentDate: { updatedAt: true } },
      updateData,
      { new: true } // Return the updated document
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Send the updated product as a response
    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
});

//?Deleteing the product data
app.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId, "productId");

    const product = await Product.findByIdAndDelete(productId);
    if (product === null || undefined) {
      return res.status(400).json({
        message: "Product Not found",
      });
    }
    console.log(product, "product");
    return res.status(200).json({
      message: "Product deleted succefully",
    });
  } catch (error) {
    console.log(error);
  }
});

//$set first use
app.get("/addfield", async (req, res) => {
  try {
    const product = await Product.updateMany({
      $set: {
        extraField: "sahils",
      },
    });
    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.log(error, "error");
  }
});
app.get("/removefield", async (req, res) => {
  try {
    const product = await Product.updateMany({
      $unset: { extraField: "" },
    });
    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.log(error, "error");
  }
});

app.get("/getAllproductInArray", async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    console.log(error, "error");
  }
});


// app.delete("/:all", async(req, res) => {
//     console.log("hey");
    
// })
  
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
