const express = require('express')
const app = express()
const port = 9082
const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost:27017/aggrigationinterview", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))