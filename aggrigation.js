console.log("JAI SHREEM JI / JAI BAJARANG BALI JI");
const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 9080;
require("./Db/connection/config");

app.get("/", async (req, res) => {
  try {
    const product = await Product.aggregate([
      {
        $match: {
          $and: [
            { discount: { $gte: 10 } }, // Discount greater than or equal to 10
            { discount: { $lt: 30 } }, // Discount less than 30
          ],
        },
      },
      {
        $sort: {
          //   discount: -1, // Sort by discount in descending order
          createdAt: -1,
        },
      },
      {
        $limit: 1, // Limit to the top 1 product
      },
      //   {
      //     $project: {
      //       name: 1,
      //       description: 1,
      //       _id: 0,
      //     },
      //   },
    ]);

    console.log(product, "product");
    return res.status(200).json({
      message: "product data",
      product,
    });
  } catch (error) {
    console.log(error, "error");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
