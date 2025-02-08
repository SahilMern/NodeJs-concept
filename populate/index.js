const express = require("express");
const ProductsPop = require("./models/product.model");
const UserPop = require("./models/user.model");
const app = express();
const port = 3000;
app.use(express.json());
require("../Db/connection/config");

app.post("/registerProducts", async (req, res) => {
  try {
    const { productId, name, price } = req.body;
    console.log(productId, name, price);

    const productData = new ProductsPop({
      productId, name, price
    });
    const data = await productData.save();
    return res.status(200).json({
      message: "Product added successfully",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
});

app.post("/registerUser", async (req, res) => {
  try {
    const { userId, name, buy_products } = req.body;
    console.log(userId, name, buy_products);

    const userData = new UserPop({
      userId, name, buy_products
    });
    const data = await userData.save();
    return res.status(200).json({
      message: "User registered successfully",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
});

app.get("/populate", async (req, res) => {
  try {
    const data = await UserPop.find({}).populate("buy_products");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
