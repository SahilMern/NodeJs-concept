const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  buy_products: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"productpop",
    required: true,
  },
});


const UserPop =  mongoose.model("userpop", userSchema)
module.exports = UserPop;