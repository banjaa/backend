const express = require("express");
const {
  postPostController,
  postGetController,
  postDeleteController,
  postGetControllerById,
} = require("../controller/postController");

const UserRouter = express
  .Router()
  .get("/post", postGetController)
  .post("/post/:user_id", postPostController)
  .delete("/post/:post_id", postDeleteController)
  .get("/post/:post_id", postGetControllerById);
module.exports = UserRouter;
