
// Find products by category and subcategory, limit the number of results
// Find products with keyword match in the description
// Aggregate products to get the average price
// Find products that have at least one image
// Find products by multiple brand names

console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");
const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9000;
require("./Db/connection/config");
app.get("/", async (req, res) => {
  try {
    // console.log("I am hitted");
    // const productData = await Product.find({});
    //? Find products by price range (low to high)
    //? Sort products by price in ascending order
    //? Get top N products (limit query)
    // Sort products by price in descending order
    // const productData = await Product.find({}).sort({
    //   price:-1,
    //   price:1
    // }).limit(1);

    //? Find products with a specific discount percentage
    // const productData = await Product.find({
    //   discount:{$eq:5}
    // });
    //? Find available products only (isAvailable = true)
    // const productData = await Product.find({
    //  isAvailable:false
    // });
    // //? Sort products by discount percentage in descending order\
    // const productData = await Product.find({}).sort({
    //   discount: -1,
    // });

    //? Filter products by multiple categories
    // const productData = await Product.find({
    //   category:{$in:["Electronics", "Electronics"]}
    // });
    //? Find products within a specific price range and sort them
    // const productData = await Product.find({
    //   price:{$gt:100,$lt:300},
    // }).sort({
    //   price:-1
    // });
    //? Find the product with the highest price
    // const productData = await Product.find({
    // }).sort({
    //   price:-1
    // }).limit(1);
    //? Find the product with the lowest price
    //     const productData = await Product.find({
    // }).sort({
    //   price:1
    // }).limit(1);
    return res.status(200).json({
      message: "Data send succefully",
      productData,
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
