const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [3, "username length must be at least 3 characters"],
    maxlength: [20, "username length must be 6 to 20 characters"],
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  comments: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
