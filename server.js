const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;
require("./Db/connection/config");

// Query question

//? Find all documents where the price is greater than 1000.
// const productData = await Product.find({ price: { $gt: 1000 } });

app.get("/", async (req, res) => {
  try {
    //!GLOBAL
    // const productData = await Product.find({});

    //?Find all documents where the price is greater than 1000
    // const productData = awaits Product.find({ price: { $gt: 1000 } });

    //? Find all products in the "Electronics" category.
    // const productData = await Product.find({
    //   category: { $eq: "Electronics" },
    // });

    //? Find all products where the price is greater than 500 and less than 2000.
    // const productData = await Product.find({
    //   price:{$gt:100, $lt:500}
    // });

    //? Retrieve all products that are currently available (i.e., isAvailable: true).
    // const productData = await Product.find({
    //     isAvailable:true
    // });

    //? Find all products where the discount is greater than 0.
    // const productData = await Product.find({
    //   discount: { $gt:20 },
    // });

    //? Get all products whose name starts with "Smart".
    //! note  ^ aage find karne ke liye
    // const productData = await Product.find({
    //   name: {
    //     $regex: "Console",
    //     $options: "i",
    //   },
    // });

    //? Find all products where the brand is "BrandE".
    // const productData = await Product.find({
    //   brand: "BrandE"
    // });

    //! Retrieve products created after 1st January 2023.
    // const productData = await Product.find({
    //   createdAt: { $gt: new Date("2023-03-01") },
    // });
    // console.log(new Date("2023-03-01"));

    //? Find products that have no subcategory assigned (i.e., subCategory is null or undefined).
    // const productData = await Product.find({
    //   $or: [{ subCategory: null }, { subCategory: { $exists: false } }],
    // });

    //! Get all products where updatedAt is more than 30 days ago.

    //? Retrieve products with images that are not empty (i.e., the images array is not empty).
    const productData = await Product.find({
      images: { $exists: true, $not: { $size: 0 } },
    });

    // $exists: Field exists or not.
    // $size: Array size.
    // $gt, $gte, $lt, $lte: Comparison.
    // $in, $nin: List membership.
    // $and, $or, $nor, $not: Logical conditions.
    // $regex: Pattern matching.
    // $elemMatch: Array element matching.
    // $type: Type of a field.
    // $addToSet, $push: Array modification.
    // $unset: Removing fields.
    // $rename: Renaming fields.
    return res.status(200).json({
      message: "All prdouct data",
      productData,
    });
  } catch (error) {
    console.log(error, "error");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
