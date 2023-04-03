const User = require("../database/model/users");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const request = require("supertest");

exports.GetUserById = async (req) => {
  const { user_id } = req.params;
  const objId = new mongoose.Types.ObjectId(user_id);
  const result = await User.findById({ _id: objId });
  return result;
};

exports.GetUserByEmail = async (req) => {
  const { email } = req.params;
  const result = await User.findOne({ email: email });
  return result;
};

exports.GetUser = async () => {
  const result = await User.find();
  return result;
};

exports.CreateUser = async (req) => {
  const { username, password, email } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  const comments = [];
  console.log(hash);
  const result = await new User({
    username: username,
    password: hash,
    email: email,
    comments: comments,
  }).save();
  console.log(result);
  return result;
};

exports.UserDelete = async (req) => {
  const { user_id } = req.params;
  const objId = new mongoose.Types.ObjectId(user_id);
  const result = await User.findById({ _id: objId });
  const resulto = await User.findByIdAndRemove(result);
  return resulto;
};

exports.UserUpdate = async (req) => {
  const { user_id } = req.params;
  const objId = new mongoose.Types.ObjectId(user_id);
  const result = await User.findById({ _id: objId });
  const { username, password, email } = req.body;
  const resulto = await User.findByIdAndUpdate(result, {
    username: username,
    password: password,
    email: email,
  });
  return resulto;
};
