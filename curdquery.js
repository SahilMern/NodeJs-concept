const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;
require("./Db/connection/config");

// Filter products based on multiple conditions (e.g., availability, category) and sort by price.
// Populate related documents (e.g., reviews) and calculate the average rating for each product.
// Use $lookup to join data from another collection (e.g., product reviews) and aggregate data (e.g., average rating).
// Find products created within a specific date range (createdAt) and sort them by the most recent.
// Aggregate the total number of products in each subcategory and sort by the highest count.
// Use $match to filter products by a specific price range and apply a discount to the price before returning results.
// Find products that have a non-zero discount and are available, then sort them by discount percentage.
// Filter products by a combination of category, subcategory, and brand, then sort by price in ascending order.
// Apply $project to exclude unnecessary fields and include only certain fields (e.g., name, price, finalPrice).
// Count the number of products with a specific brand and display the total.
// Perform a text search on product descriptions or names and return the sorted results.
// Update a field (updatedAt) when products are updated and return the updated documents.

app.get("/", async (req, res) => {
  try {
    // //? Sort products by price in ascending or descending order and limit the number of results.
    // const productCurd = await Product.find().sort({ price: 1 }).limit(2);

    //? Multiply two fields (price and discount) and add the result to a new field (finalPrice).
    // const productCurd = await Product.aggregate([
    //   {
    //     $addFields:{
    //         finalPrice:{$multiply:["$price", "$discount"]}
    //     }
    //   },
    // ]);

    //? Group products by category and calculate the average price of products per category.

    // const productCurd = await Product.aggregate([
    //   {
    //     $group: {
    //       _id: "$name", // Group by the 'name' field
    //       count: { $sum: 1 }, // Count the number of products with the same name
    //       // Sum the 'price' field for each group
    //     },
    //   },
    //   {
    //     totalprice: { $multiply: ["$price", "$mutiply"] },
    //   },
    // ]);

    return res.status(200).json({
      message: "Product record",
      productCurd,
    });
  } catch (error) {
    console.log(error, "error");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
