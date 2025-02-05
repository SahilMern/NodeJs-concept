const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
const User = mongoose.model("User", userSchema);
module.exports = User;

// ---------------------------------------------------------------


const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;


app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name email"); // Populate user field with name and email
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
