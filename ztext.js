// console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");
// const express = require("express");
// const Product = require("./models/Products.model");
// const app = express();
// const port = 9000;
// require("./Db/connection/config");
// app.get("/", async (req, res) => {
//   try {
//     // console.log("I am hitted");
//     // const productData = await Product.find({});
//     //? Find products by price range (low to high)
//     //? Sort products by price in ascending order
//     //? Get top N products (limit query)
//     // Sort products by price in descending order
//     // const productData = await Product.find({}).sort({
//     //   price:-1,
//     //   price:1
//     // }).limit(1);

//     //? Find products with a specific discount percentage
//     // const productData = await Product.find({
//     //   discount:{$eq:5}
//     // });
//     //? Find available products only (isAvailable = true)
//     // const productData = await Product.find({
//     //  isAvailable:false
//     // });
//     // //? Sort products by discount percentage in descending order\
//     // const productData = await Product.find({}).sort({
//     //   discount: -1,
//     // });

//     //? Filter products by multiple categories
//     // const productData = await Product.find({
//     //   category:{$in:["Electronics", "Electronics"]}
//     // });
//     //? Find products within a specific price range and sort them
//     // const productData = await Product.find({
//     //   price:{$gt:100,$lt:300},
//     // }).sort({
//     //   price:-1
//     // });
//     //? Find the product with the highest price
//     // const productData = await Product.find({
//     // }).sort({
//     //   price:-1
//     // }).limit(1);
//     //? Find the product with the lowest price
//     //     const productData = await Product.find({
//     // }).sort({
//     //   price:1
//     // }).limit(1);
//     //? Count total available products by category
//     // const productData = await Product.countDocuments({
//     //   isAvailable: true,
//     //   category: "Electronics", // Replace 'Electronics' with your desired category
//     // });

//     //? Find products with a specific subcategory
//     // const productData = await Product.find({
//     //   subCategory:"Audio"
//     // });
//     //? Update product price by product ID
//     // const productID = "67cca29fc255524d358a5474";
//     // const productData = await Product.findByIdAndUpdate(
//     //   { _id: productID },
//     //   {
//     //     price: 198.99,
//     //   },
//     //   { new: true }
//     // );
//     //? Delete products that are out of stock
//     //     const productData = await Product.deleteMany({
//     //       isAvailable:false
//     // });

//     //? Find products by category and subcategory, limit the number of results
//     // const productData = await Product.find({
//     //   category:"Electronics",
//     //   subCategory:"Laptops"
//     // }).limit(2);

//     //? Find products with keyword match in the description
//     // const { search } = req.query;
//     // let query = {};
//     // if(query) {
//     //   query.description = {
//     //     $regex: search,
//     //     $options: "i",
//     //   };
//     // }
//     // console.log(search, "search");
//     // const productData = await Product.find(query);

//     //? Aggregate products to get the average price
//     // const productData = await Product.aggregate([
//     //   {
//     //     $group: {
//     //       _id: null, // We don't need to group by any field, so set _id to null
//     //       averagePrice: { $avg: "$price" } // Calculate the average of the 'price' field
//     //     }
//     //   }
//     // ]);

//     //? Find products that have at least one image
//     // const productData = await Product.find({
//     //   images:{$ne:[]}
//     // })
//     //? Find products by multiple brand names
//     // const productData = await Product.find({
//     //   name: { $in: ["Smartphone XYZ", "Laptop ABC"] },
//     // });

//     //?Find products by multiple categories (AND condition)
//     // const productData = await Product.find({
//     //   $and: [
//     //     { category: "Electronics" },
//     //     { category: "Wearables" }
//     //   ]
//     // });

//     //? Find products with a price greater than a specific value and sort them by price
//     // const productData = await Product.find({
//     //   price:{$gt:500}
//     // }).sort({
//     //   price:-1
//     // });
//     //? Find products with a discount percentage greater than a certain value and sort by discount
//     // const productData = await Product.find({
//     //   discount: { $gt: 20 },
//     // }).sort({
//     //   discount: -1,
//     // });
//     //? Find products with a name that partially matches a given string (using regex)
//     //  const productData = await Product.find({

//     // });
//     // Find products with a price range (e.g., between 100 and 500)
//     // Find products with at least one image and sort by price
//     //? Find products created within a specific date range
//     // const productData = await Product.find({
//     //   createdAt: {
//     //     $gte: new Date("2023-01-01"), // Starting date
//     //     $lte: new Date("2025-12-31")  // Ending date
//     //   }
//     // });

//     //? Find the top 5 most expensive products
//     // const productData = await Product.find({
//     // }).sort({
//     //   price:-1
//     // }).limit(5);

//     //? Find products with a specific brand, category, and availability
//     // const productData = await Product.find({
//     //   brand: "BrandD", // Replace with the specific brand name
//     //   category: "Wearables", // Replace with the specific category
//     //   isAvailable: true, // Find only products that are available
//     // });

//     //? Find products that have not been updated in the last 30 days
//     // const thirtyDaysAgo = new Date();
//     // thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30); // Get the date 30 days ago

//     // const productData = await Product.find({
//     //   updatedAt: { $lt: thirtyDaysAgo }, // Find products that were updated before 30 days ago
//     // });

//     //? Find products where the description contains a keyword and has a discount
//     // const { search } = req.query;
//     // const productData = await Product.find({
//     //   description: {
//     //     $regex: search,
//     //     $options: "i",
//     //   },
//     //   discount:{$gt:55}
//     // });
//     //? Find the average price of products in a specific category using aggregation

//     // const productData = await Product.aggregate([
//     //   {
//     //     $group: {
//     //       _id: null,         // Grouping everything together (no specific field to group by, so set _id to null)
//     //       averagePrice: {    // Calculating the average price
//     //         $avg: "$price"   // Average of the 'price' field
//     //       }
//     //     }
//     //   }
//     // ]);

//     //? Find products that were created within the last 7 days
//     // const currentDate = new Date(); // Get the current date and time
//     // console.log(currentDate, "currentDate");

//     // // Calculate the date 7 days ago
//     // const sevenDaysAgo = new Date();
//     // sevenDaysAgo.setDate(currentDate.getDate() - 7); // Subtract 7 days from current date
//     // console.log(sevenDaysAgo, "sevenDaysAgo");

//     // // Find products created within the last 7 days
//     // const productData = await Product.find({
//     //   createdAt: { $gte: sevenDaysAgo }, // Filter products where createdAt is greater than or equal to 7 days ago
//     // });

//     //? Find products with a minimum rating of 4 stars
//     // const productData = await Product.find({
//     //   rating: { $gte: 4 },
//     // });

//     //? Find products and group them by category with their average price

//     //? Find products where the price is below a specific threshold and filter by availability
//     // const productData = await Product.find({
//     //   price: { $lt: 500 },
//     //   isAvailable: true,
//     // });

//     //? Find products with no images (empty array)
//     // const productData = await Product.find({
//     //   images: { $size: 0 },
//     // });

//     //? Find products with a discount greater than 10% and sort by name alphabetically

//     // Find products with a specific keyword match in the description and sort by creation date
//     //? Count products by availability (e.g., how many are in stock vs out of stock)
//     const productData = await Product.find({
//       isAvailable:true
//     });

//     return res.status(200).json({
//       message: "Data send succefully",
//       productData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))