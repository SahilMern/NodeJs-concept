console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI💖");

const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;

// Import MongoDB connection configuration
require("./Db/connection/config");

// Route to handle product search by category
// app.get("/", async (req, res) => {
//   const { search } = req.query;
//   console.log("Search Query:", search);

//   let query = {};

//   // If a search term is provided, use regex to find matching category (case-insensitive)
//   if (search) {
//     query.category = {
//       $regex: search,
//       $options: "i", // Case-insensitive search
//     };
//   }

//   try {
//     // Fetch products from MongoDB based on the query
//     const data = await Product.find(query);

//     // If no products are found
//     if (data.length === 0) {
//       return res.status(404).json({
//         message: "No products found for the specified search term.",
//         data: [],
//       });
//     }

//     // If products are found
//     return res.status(200).json({
//       message: "Products fetched successfully.",
//       data,
//     });
//   } catch (error) {
//     console.error(error);
//     // Return a 500 error if something goes wrong
//     return res.status(500).json({
//       message: "An error occurred while fetching products.",
//       error: error.message,
//     });
//   }
// });

app.get("/", async (req, res) => {
  try {
    // Fetch products from MongoDB based on the query
    //   const data = await Product.find().sort({
    //     price:-1
    //   }).limit(1).select("name price -_id");

    const data = await Product.updateOne(
      { _id: "675bd927496febc61c85fd3d" },
      {
        $set: {
          name: "Sahil--------",
        },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Products found successfully within price range.",
      data,
    });

    // If products are found
    return res.status(200).json({
      message: "Products fetched successfully.",
      data,
    });
  } catch (error) {
    console.error(error);
    // Return a 500 error if something goes wrong
    return res.status(500).json({
      message: "An error occurred while fetching products.",
      error: error.message,
    });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
