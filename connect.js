const mongoose = require("mongoose");

// Your MongoDB connection URL
const dburl = "mongodb+srv://sahil9082811:sahilmongodb@cluster0.zmq5rzb.mongodb.net/blocksphere?retryWrites=true&w=majority&appName=Cluster0";

// Connect to the database
mongoose.connect(dburl, {})
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
