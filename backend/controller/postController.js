const Post = require("../database/model/post");
const mongoose = require("mongoose");
const { CreatePost, PostDelete, GetPostById } = require("../query/PostQuery");

exports.postGetController = async (req, res) => {
  const result = await Post.find();
  res.send({ data: result });
};

exports.postPostController = async (req, res) => {
  try {
    await CreatePost(req);
    res.status(201).send(" Successfully created new post ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.postDeleteController = async (req, res) => {
  try {
    await PostDelete(req);
    res.status(201).send(" Successfully deleted  post ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.postGetControllerById = async (req, res) => {
  try {
    const result = await GetPostById(req);
    res.status(201).send(result);
  } catch (err) {
    res.send(err.message);
  }
};
