const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // Duration in weeks, for example
    required: true,
  },
});

const Course = mongoose.model("coursepopulate", courseSchema);
module.exports = Course;
