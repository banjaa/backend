const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [6, "username length must be at least 6 characters"],
    maxlength: [20, "username length must be 6 to 20 characters"],
  },
  title: {
    type: String,
    required: true,
    minlength: [5, "username length must be at least 6 characters"],
    maxlength: [20, "username length must be 6 to 20 characters"],
  },
  word: {
    type: String,
    required: true,
    maxlength: [100, "username length must be 6 to 20 characters"],
  },
  createdAt: { type: Date, default: Date.now() },
  comments: { type: Array, required: true },
});

const UserModel = mongoose.model("Post", Post);

module.exports = UserModel;
