<<<<<<< HEAD

=======
const express = require("express");
const Product = require("./models/products");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/aggrigationinterview", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err });
  }
});

// Get all products
app.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err });
  }
});

app.get("/match", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $match: {
          name: "Smartphone X1",
        },
      },
    ]);
    console.log(data, "data");
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/group", async (req, res) => {
  const data = await Product.aggregate([
    {
      $group: {
        _id: "Laptop Pro 15",
      },
    },
  ]);

  return res.status(200).json({
    data,
  });
});

app.get("/project", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $match: {
          name: "Laptop Pro 15",
        },
      },
      {
        $project: {
          _id: 0,
          name: 1,
          category: 1,
        },
      },
    ]);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/sort", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $match: {
          name: "Laptop Pro 15",
        },
      },
      {
        $sort: {
          price: -1,
        },
      },
    ]);
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/limit", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $match: {
          name: "Laptop Pro 15", // Filter documents by product name
        },
      },
      {
        $sort: {
          price: -1, // Sort by age in descending order
        },
      },
      {
        $limit: 1, // Limit the result to 2 documents
      },
    ]);

    // Send the aggregated data as a response
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.error(error);
    // Send a 500 status code in case of an error
    return res
      .status(500)
      .json({ error: "An error occurred while fetching data." });
  }
});
app.get("/skip", async (req, res) => {
  try {
    const data = await Product.aggregate([
      {
        $match: {
          name: "Laptop Pro 15", // Filter documents by product name
        },
      },
      {
        $sort: {
          price: -1, // Sort by age in descending order
        },
      },
      {
        $limit: 1, // Limit the result to 2 documents
      },
      {
        $skip: 1,
      },
    ]);

    // Send the aggregated data as a response
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.error(error);
    // Send a 500 status code in case of an error
    return res
      .status(500)
      .json({ error: "An error occurred while fetching data." });
  }
});


app.get("/addfield", async (req, res) => {
    try {
      const data = await Product.aggregate([
        {
          $addFields: {
            totalPrice:{
                $multiply:["$price", 100]
            }
          } // Unwind the price array field
        }
      ]);
  
      return res.status(200).json({
        data,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while processing the data.' });
    }
  });
  
  db.products.aggregate([
    { $match: { price: { $gte: 1000 } } },  // Filter products with price >= 1000
    { $group: { 
        _id: "$category", 
        totalPrice: { $sum: "$price" },
        averagePrice: { $avg: "$price" }
    }},
    { $sort: { totalPrice: -1 } },  // Sort by total price in descending order
    { $limit: 5 },  // Limit the result to top 5 categories
    { $project: { category: "$_id", totalPrice: 1, averagePrice: 1, _id: 0 } }  // Project result
  ]);
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
>>>>>>> 357e74817648bdc974373403ef3a7598e3bd8657
