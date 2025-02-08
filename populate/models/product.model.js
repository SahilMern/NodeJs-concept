const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});


const ProductsPop =  mongoose.model("productpop", productSchema)
module.exports = ProductsPop;