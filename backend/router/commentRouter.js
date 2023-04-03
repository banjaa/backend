const express = require("express");

const {
  commentPutController,
  commentDeleteController,
  commentUpdateController,
} = require("../controller/commentController");

const UserRouter = express
  .Router()
  .put("/comment/:post_id", commentPutController)
  .delete("/comment/:post_id/:comment_id", commentDeleteController)
  .put("/comment_update/:post_id/:comment_id", commentUpdateController);
module.exports = UserRouter;
