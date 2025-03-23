const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['home', 'office'],  // Yeh define karta hai ki address type 'home' ya 'office' ho sakta hai
        required: true
    },
    // address_line: {
    //     type: String,
    //     required: true
    // },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    }
});


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addresses: [addressSchema], // Home aur Office addresses ko yahan store karenge
});

const User = mongoose.model("useraddressschema", userSchema);
module.exports = User;
