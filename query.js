const Product = require("./models/Products.model");

const addData = async (req, res) => {
  try {
    // const productId = req.params.id;
    // const data = await Product.findById(productId);
    const data = await Product.findOne({})
    // const data = await Product.find();
  } catch (error) {
    console.log(error);
  }
};
