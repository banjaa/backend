const Post = require("../database/model/post");
const mongoose = require("mongoose");

exports.CreatePost = async (req, res) => {
  const { user_id } = req.params;
  const { username, title, word } = req.body;
  const comments = [];
  const result = await new Post({
    user_id: user_id,
    username: username,
    title: title,
    word: word,
    comments: comments,
  }).save();
  console.log(result);
  return result;
};

exports.PostDelete = async (req, res) => {
  const { post_id } = req.params;
  const objId = new mongoose.Types.ObjectId(post_id);
  const result = await Post.findById({ _id: objId });
  const resulto = await Post.findByIdAndRemove(result);
  return resulto;
};

exports.GetPostById = async (req, res) => {
  const { post_id } = req.params;
  const objId = new mongoose.Types.ObjectId(post_id);
  const result = await Post.findById({ _id: objId });
  return result;
};
