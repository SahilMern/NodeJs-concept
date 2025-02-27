const express = require("express");
const app = express();
const port = 9082;
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/aggrigationinterview", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
const Product = require("./models/products");

//Get All data
app.get("/alldata", async (req, res) => {
  console.log("Api hit");
  try {
    // const productData = await Product.aggregate([
    //     { $skip:1 }
    // ]);
    const productData = await Product.aggregate([
      {
        $group: {
          _id: "$name",
        },
      },
      {
        $project: {
          name: 1,
          category: 1,
        },
      },
    ]);
    return res.status(200).json({
      productData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
