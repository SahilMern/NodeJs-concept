const mongoose = require("mongoose");

// Define a sub-schema for the address
const addressSchema = new mongoose.Schema({
  type: { type: String, required: true }, // "home" or "work"
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

// Define the main schema for the user
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  addresses: {
    type: [addressSchema], // Embed the address schema as an array
    default: [], // Default to an empty array if no addresses are provided
  },
});

// Create a model based on the user schema
const User = mongoose.model("userembbed", userSchema);

module.exports = User;
