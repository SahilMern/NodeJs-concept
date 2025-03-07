const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 9080;
app.use(express.json());

// Database connection
require("./Db/connection/config");

// Define course schema
const courseSchema = mongoose.Schema({
  coursename: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a course model
const Course = mongoose.model("CourseRuf", courseSchema);

// User schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  learning_course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CourseRuf", // Reference to the Course model
    required: true,
  },
});

// Create a user model
const User = mongoose.model("User", userSchema);

// Example route to create a course (for testing)
app.post("/course", async (req, res) => {
  try {
    const { coursename, duration } = req.body;
    const newCourse = new Course({
      coursename,
      duration,
    });
    const savedCourse = await newCourse.save();
    return res.status(201).json(savedCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create course" });
  }
});

// Route to register a user with a learning course
app.post("/register", async (req, res) => {
  try {
    const { name, learning_course } = req.body;
    console.log(name, learning_course, " name, learning_course");

    // Find the course using the learning_course ObjectId
    const course = await Course.findById(learning_course);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Create a new user and associate with the course
    const newUser = new User({
      name,
      learning_course,
    });

    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id, "id");

  try {
    const data = await User.findById({ _id: id })
      .populate("learning_course")
      .sort({name:-1})
    //   .select(" -_id -__v");
    console.log(data, "dat");
    return res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(error);
  }
});
// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
