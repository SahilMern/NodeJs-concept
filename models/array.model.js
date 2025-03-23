// const mongoose = require("mongoose");
// const arrayDocumentSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   arrayField: [
//     {
//       type: String,
//     },
//   ],
// });
// const ArrayField =
//   mongoose.model.arrayField ||
//   mongoose.model("arrayfield", arrayDocumentSchema);
// module.exports = ArrayField;

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: [
    {
      type: {
        type: String,
        enum: ["home", "office"], // Yeh define karta hai ki address type sirf home ya office ho sakta hai
        required: true,
      },
      address_line: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      postal_code: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
