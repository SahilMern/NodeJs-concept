const express = require("express");
const Product = require("./models/Products.model");
const app = express();
const port = 3000;
require("./Db/connection/config");
app.use(express.json());
app.get("/", async (req, res) => {
  try {
    // Find products by multiple categories (AND condition)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    console.log(thirtyDaysAgo);
    
    // return res.status(200).json({
    //   message: "fafa",
    //   getData,
    // });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
