const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;
require("./Db/connection/config");

//TODO:- QUESTION LIST

// Find products where the price is between 500 and 1500, sorted by created date in descending order.

// Find products with a specific subcategory, for example, "Smartwatches", and sorted by price in ascending order.

// Find products that are out of stock (isAvailable: false) and sort them by the most recent created date.

// Find products where the price is greater than 500 and less than 2000, limit to 5 results, sorted by price ascending.

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
    // const productData = await Product.find({
    //   images: { $exists: true, $not: { $size: 0 } },
    // });

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

    //? Find products with price greater than 1500 and limit the result to 3, sorted by price in ascending order.
    // const productData = await Product.find({
    //   price: { $gt: 1500 },
    // })
    //   .limit(3)
    //   .sort({ price: -1 });

    // //? Find all products with a discount greater than 10, sorted by discount in descending order.
    // const productData = await Product.find({
    //   discount: { $gt: 10 },
    // }).sort({discount:-1});

    // const productData = await Product.find({
    //     brand: "BrandA",
    //     isAvailable: true,  // To ensure the product is available
    //   }).sort({ name: 1 }); // Sort by name in alphabetical (ascending) order

    //? Find all products with price greater than 1000 and less than 3000, sorted by price in descending order.
    // const productData = await Product.find({
    //   $and: [{ price: { $gt: 1000 } }, { price: { $lt: 4000 } }],
    // }).sort({price:-1});

    //? Find products with no subcategory assigned (subCategory is null or undefined).
    //  const productData = await Product.find({
    //   subCategory:{$in:[null, undefined]}
    //  });

    //? Find products with images (images array is not empty), sorted by price in ascending order.
    // const productData = await Product.find({
    //   image: { $exists: true, $not: { $size: 0 } },
    // }).sort({ price: 1 });

    //? Find all products with images and available in stock (isAvailable: true), sorted by price in ascending order.
    // const productData = await Product.find({
    //   $and: [
    //     { image: { $exists: true, $not: { $size: 0 } } },
    //     { isAvailable: true },
    //   ],
    // }).sort({ price: 1 });

    //? Find products with a specific category like "smartwatch" and limit the result to 3.
    // const productData = await Product.find({
    //   category:"Electronics"
    // }).limit(1);

    //? Find products where the description contains the word "fitness" and limit the result to 5.
    // const productData = await Product.find({
    //   description:{
    //     $regex:"graphics",
    //     $options:"i"
    //   }
    // }).limit(1);

    //? Find products where price is greater than 1000 and less than 3000, and filter products with a discount greater than 10.
    // const productData = await Product.find({
    //   $and: [
    //     { price: { $gt: 1000, $lt: 3000 } },
    //     { discount: { $gt: 5 } }
    //   ]
    // });

    //? Find products created in 2025, limit to 5, and sort by the most recent.
    // const productData = await Product.find({
    //   createdAt: {
    //     $gte: new Date("2025-01-01"),
    //     $lt: new Date("2026-01-01"),
    //   },
    // })
    //   .sort({ createdAt: -1 })
    //   .limit(1);

    //? Find products created after "2023-01-01" and limit to 10 results.
    // const productData = await Product.find({
    //   createdAt: {
    //     $gte: new Date("2023-01-01"),
    //   },
    // })
    //   .sort({ createdAt: -1 })
    //   .limit(3);

    return res.status(200).json({
      message: "All prdouct data",
      productData,
    });
  } catch (error) {
    console.log(error, "error");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
