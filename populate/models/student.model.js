const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  enrolled_courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "coursepopulate",  // This will refer to the Course model
    required: true,
  }],
});

const Student = mongoose.model("studentpopulate", studentSchema);
module.exports = Student;
