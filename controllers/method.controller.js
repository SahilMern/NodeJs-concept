const Product = require("../models/Products.model");

const cursormethod = async (req, res) => {
  //! COUNT DOCUMNETS IN JS
  const count = await Product.find({
    category: "Electronics",
  }).countDocuments();

  const limit = await Product.find({ category: "Electronics" }).limit(1);
  const sort = await Product.find({ category: "Electronics" }).sort({
    price: -1,
  });

  const skip = await Product.find({category:"Electronics"}).limit(5).skip(2)

  return res.status(200).json({
    count,
    limit,
    sort,
    skip
  });
};

const comparison = async (req, res) => {
  try {
    const greater = await Product.find({
      price: { $gt: 50000 },
    });
    const equalToo = await Product.find({
      // price:{$eq:12000}
      price: { $ne: 999.99 },
      // price:{$eq:12000}
    });
    const electronicsOrClothingProducts = await Product.find({
      category: { $in: ["Electronics", "Clothing"] },
    });
    return res.status(200).json({
      // greater,
      // equalToo,
      electronicsOrClothingProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

const logical = async (req, res) => {
  try {
    // const and = await Product.find({$and:[{price:999.99}, {category:"Electronics"}]})

    const and = await Product.find({
      $or: [{ price: { $gt: 580000 } }, { category: "Electronicss" }],
    });
    return res.status(200).json({
      and,
    });
  } catch (error) {}
};

const expression = async (req, res) => {
  try {
    const data = await Product.find({
      $expr:{
        $gt:[
          {
            
          }
        ]
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const updateDocument = async (req, res) => {
  try {
    const id = req.params.id;

    const updateDocumnet = await Product.findOne(
      { _id: id },
      {
        $set: { name: "n" },
      }
    );
    // console.log(updateDocument);

    return res.status(200).json({
      updateDocumnet,
    });
  } catch (error) {
    console.log(error, "error");
  }
};


const allDocument =  async (rrq, res) => {
  try {
    // const data = await Product.find({})
    const data = await Product.find({tags:{$all: ["smartwatch", "fitness"]}})
    console.log(data, "data In $all");
    
  } catch (error) {
    console.log(error);
    
  }
}
module.exports = {
  cursormethod,
  comparison,
  logical,
  expression,
  updateDocument,
  allDocument
};
