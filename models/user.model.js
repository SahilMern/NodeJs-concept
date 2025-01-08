const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'seller'], // Defines the role of the user
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  productsOwned: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product' 
    }
  ]
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User;
