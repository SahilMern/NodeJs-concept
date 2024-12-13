const Product = require("../models/Products.model");

const cursormethod = async(req, res) => {
    console.log("Hey");
   const data = await Product.find({})
   console.log(data, "data");
   return res.status(200).json({
    data
   })
   
}

module.exports = {cursormethod}