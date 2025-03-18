console.log("JAI SHREEM JI / JAI BAJARANG BALI JI");

const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;
require("./Db/connection/config");

// Root endpoint to get products with a discount between 10 and 30
app.get("/", async (req, res) => {
  try {
    const product = await Product.aggregate([
      {
        $match: {
          $and: [
            { discount: { $gte: 10 } }, // Discount greater than or equal to 10
            { discount: { $lt: 30 } },  // Discount less than 30
          ],
        },
      },
      {
        $sort: {
          createdAt: -1, // Sort by creation date in descending order
        },
      },
      {
        $limit: 1, // Limit to the top 1 product
      },
      {
        $project: {
          name: 1,
          description: 1,
          _id: 0, // Omit the _id field
        },
      },
    ]);

    console.log(product, "product");
    // If no product is found, handle it
    if (product.length === 0) {
      return res.status(404).json({
        message: "No products found with the specified discount range.",
      });
    }

    return res.status(200).json({
      message: "Product data fetched successfully",
      product,
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      message: "An error occurred while retrieving the product.",
      error: error.message,
    });
  }
});

// /baba endpoint to get products where price is greater than 500
// app.get("/baba", async (req, res) => {
//   try {
//     const products = await Product.aggregate([
//       {
//         $match: {
//           price: { $gt: 500 }, // Products with price greater than 500
//         },
//       },
//     ]);

//     // If no products found
//     if (products.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "No products found with price greater than 500.",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: products,
//     });
//   } catch (error) {
//     console.error("Error in aggregation:", error);
//     res.status(500).json({
//       success: false,
//       message: "An error occurred while retrieving products.",
//       error: error.message,
//     });
//   }
// });


app.get("/baba", async (req, res) => {
  try {
    const products = await Product.aggregate([
     {
      $sortByCount:"$category"
     }
    ]);

    // If no products found
    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found with price greater than 500.",
      });
    }

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error in aggregation:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products.",
      error: error.message,
    });
  }
});

app.get("/nest", async (req, res) => {
  try {
  //   const products = await Product.aggregate([
  //  {   $match:{
  //       price:{$gt:100}
  //     }},
  //     {
  //       $sort:{
  //         price:-1
  //       }
  //     },
  //     {
  //       $limit:5
  //     },
  //     {
  //       $project:{
  //         name:1,
  //         _id:0
  //       }
  //     }
  //   ]);

  // const products = await Product.aggregate([
  //   {
  //     $group:{
  //       _id:"$category",
  //      count:{$sum:1}
  //     }
  //   }
  // ])

  // const products = await Product.aggregate([
  //   {
  //     $match:{
  //       price:{$gt:200}
  //     }
  //   },{
  //     $count:"countoftotalproduct"
  //   }
  // ])

  // const products = await Product.aggregate([
  //   {
  //     $group:{
  //       _id:"$category",
  //       countOfDocs:{$sum:1},
  //       // nameofdocs:{$push:"$name"}// only give name
  //       // nameofdocs:{$push:"$$ROOT"} //Pura record deg
  //       nameofdocs:{$addToSet:"$$ROOT"} //Same like $push


  //     }
  //   }
  // ])


  const products = await Product.aggregate([
    {
      $group:{
        _id:"$category",
        // _id:"$null", //Sab ke liye
        useRecord:{
          $push:"$$ROOT"
        }
,
        // nameofdocs:{$addToSet:"$$ROOT"} ,
       maxium_price:{
        $max:"$price"
       },
       minimum_price:{
        $min:"$price"
       },
      avrage:{
        $avg:"$price"
      },
      median:{
        $median:{
          input:"$price",
          method:"approximate"
        }
      },
      firstUser:{
        $first:"$name"
      },
      last_user:{
        $last:"$name"
      }
      }
    }
  ])


    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error in aggregation:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products.",
      error: error.message,
    });
  }
});


// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


