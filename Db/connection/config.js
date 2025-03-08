const mongoose = require('mongoose');
console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/nodejs",);
    console.log('MongoDB Connected:', conn.connection.host); 
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message); 
    process.exit(1);  
  }
};

// Call the connectDB function to connect to MongoDB
connectDB();
