const express = require("express");
const Course = require("./models/course.model");
const Student = require("./models/student.model");
const app = express();
const port = 3000;
app.use(express.json());
require("../Db/connection/config");

// Register Course
app.post("/registerCourse", async (req, res) => {
  try {
    const { courseId, name, duration } = req.body;
    console.log(courseId, name, duration);

    const courseData = new Course({
      courseId, name, duration
    });
    const data = await courseData.save();
    return res.status(200).json({
      message: "Course added successfully",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
});

// Register Student
app.post("/registerStudent", async (req, res) => {
  try {
    const { studentId, name, enrolled_courses } = req.body;
    console.log(studentId, name, enrolled_courses);

    const studentData = new Student({
      studentId, name, enrolled_courses
    });
    const data = await studentData.save();
    return res.status(200).json({
      message: "Student registered successfully",
      data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
});

// Get Student Data and Populate Enrolled Courses
app.get("/populate", async (req, res) => {
  try {
    const data = await Student.find({}).populate("enrolled_courses");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
