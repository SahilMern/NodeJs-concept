const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userpostpopulate",
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "commentpopulate",
    },
  ],
});

const Post = mongoose.model("postpopulate", postSchema);
module.exports = Post;
