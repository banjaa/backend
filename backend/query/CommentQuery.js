const Post = require("../database/model/post");
const mongoose = require("mongoose");

exports.AddCommment = async (req, res) => {
  const { post_id } = req.params;
  const { comment } = req.body;
  const day = new Date(Date.now());
  const objId = new mongoose.Types.ObjectId(post_id);
  const result = await Post.findById({ _id: objId });
  console.log(result);

  comment["createAt"] = day;
  comment["comment_id"] = result.comments.length + 1;

  const resulto = await Post.findOneAndUpdate(
    { _id: post_id },
    { $push: { comments: comment } },
    { new: true }
  );
  console.log(resulto);
  return resulto;
};

exports.CommentDelete = async (req, res) => {
  const { post_id } = req.params;
  const { comment_id } = req.params;
  const result = await Post.findByIdAndUpdate(
    { _id: post_id },
    {
      $pull: { comments: { comment_id: Number(comment_id) } },
    },
    { new: true }
  );
  return result;
};

exports.CommentUpdate = async (req, res) => {
  const { post_id } = req.params;
  const { comment_id } = req.params;
  const { comment } = req.body;
  const myPost = await Post.findById({ _id: post_id });
  let too = 0;
  myPost.comments.map((commento) => {
    console.log(commento);
    if (commento.comment_id == comment_id) {
      myPost.comments[too].comment = comment;
    } else {
      too = too + 1;
    }
  });

  const result = await Post.findByIdAndUpdate(
    { _id: post_id },
    { comment: myPost.comments },
    { new: true }
  );

  return result;
};
