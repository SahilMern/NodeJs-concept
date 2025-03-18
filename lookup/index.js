console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9080;
require("../Db/connection/config"); // Make sure the path is correct for your DB connection

// Middleware to parse JSON bodies
app.use(express.json());

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
  },
  { collection: "lookupusers" }
);
const User = mongoose.model("User", userSchema);

// Define the Library schema with a reference to User
const librarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    BookkTaker: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
      },
    ],
  },
  { collection: "looklibaray" }
);
const Library = mongoose.model("Library", librarySchema);

// Route to handle user registration
app.post("/register", async (req, res) => {
  const { name, className } = req.body;
  try {
    const userRegister = new User({
      name,
      className,
    });
    await userRegister.save();
    res.status(200).json(userRegister);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
});

// Route to create a new library
app.post("/library/create", async (req, res) => {
  const { name } = req.body;
  try {
    const newLibrary = new Library({
      name,
      BookkTaker: [], // Initially empty BookkTaker array
    });
    await newLibrary.save();
    res.status(200).json(newLibrary);
  } catch (error) {
    console.error("Error creating library:", error);
    res.status(500).json({
      message: "Error creating library",
      error: error.message,
    });
  }
});

// Route to add a user to the Library's BookkTaker list
app.post("/library/add", async (req, res) => {
  const { libraryId, userId } = req.body;
  console.log(libraryId, userId, "libraryId, userId");

  try {
    // Find the library by its ID
    const library = await Library.findById(libraryId);
    if (!library) {
      return res.status(404).json({ message: "Library not found" });
    }

    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the user to the BookkTaker list
    library.BookkTaker.push(userId);
    await library.save();
    res.status(200).json(library);
  } catch (error) {
    console.error("Error adding user to library:", error);
    res.status(500).json({
      message: "Error adding user to library",
      error: error.message,
    });
  }
});

// Route to get library data with populated BookkTaker information using Mongoose populate
app.get("/library/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id, "libraryId");

  try {
    // Using Mongoose populate to get user details in the BookkTaker list
    const library = await Library.findById(id).populate("BookkTaker");
    if (!library) {
      return res.status(404).json({ message: "Library not found" });
    }

    res.status(200).json(library);
  } catch (error) {
    console.error("Error retrieving library data:", error);
    res.status(500).json({
      message: "Error retrieving library data",
      error: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
