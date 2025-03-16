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
    //? Count total available products by category
    // const productData = await Product.countDocuments({
    //   isAvailable: true,
    //   category: "Electronics", // Replace 'Electronics' with your desired category
    // });

    //? Find products with a specific subcategory
    // const productData = await Product.find({
    //   subCategory:"Audio"
    // });
    //? Update product price by product ID
    // const productID = "67cca29fc255524d358a5474";
    // const productData = await Product.findByIdAndUpdate(
    //   { _id: productID },
    //   {
    //     price: 198.99,
    //   },
    //   { new: true }
    // );
    //? Delete products that are out of stock
    //     const productData = await Product.deleteMany({
    //       isAvailable:false
    // });

    //? Find products by category and subcategory, limit the number of results
    // const productData = await Product.find({
    //   category:"Electronics",
    //   subCategory:"Laptops"
    // }).limit(2);

    //? Find products with keyword match in the description
    const productData = await Product.find({
      category:"Electronics",
      subCategory:"Laptops"
    })
    // Aggregate products to get the average price
    // Find products that have at least one image
    // Find products by multiple brand names
    return res.status(200).json({
      message: "Data send succefully",
      productData,
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
