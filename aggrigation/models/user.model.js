const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,  
    minlength: 3,  
    maxlength: 100  
  },
  email: {
    type: String,
    required: true,
    unique: true,   
  },
  password: {
    type: String,
    required: true,
    minlength: 6     // Password must be at least 6 characters long
  },
 
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
