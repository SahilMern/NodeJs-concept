const mongoose = require('mongoose');

// Create a function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Replace 'your_database_url' with your actual MongoDB connection string
    const conn = await mongoose.connect("mongodb://localhost:27017/nodejs",);
    console.log('MongoDB Connected:', conn.connection.host);  // Log successful connection
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);  // Log error if connection fails
    process.exit(1);  // Exit the process if connection fails
  }
};

// Call the connectDB function to connect to MongoDB
connectDB();
