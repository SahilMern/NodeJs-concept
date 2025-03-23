console.log("Jai Shree Ram Ji / Jai Bajarang Bali ji");
const express = require("express");
const User = require("./userAddress.schema");
const app = express();
const port = 3000;
app.use(express.json());
require("../../Db/connection/config");

//User Register with one or address or without addresss
app.post("/register", async (req, res) => {
  const { name, addresses } = req.body;
  console.log(addresses);

  const newUser = new User({
    name,
    addresses: addresses || [], // Agar address nahi diya toh empty array store hoga
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User registered successfully!",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

//Update user Address
app.post("/update", async (req, res) => {
  const { id, address } = req.body;
  console.log(id, address, "id, address");
  
  try {
    // const savedUser = await newUser.save();
    // res.status(201).json({
    //   message: "User registered successfully!",
    //   user: savedUser,
    // });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
