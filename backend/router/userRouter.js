const express = require("express");

const {
  userPostController,
  userGetControllerById,
  userGetController,
  userDeleteController,
  userPutController,
  userGetControllerByEmail,
  userLogin,
  get,
} = require("../controller/userController");

const UserRouter = express
  .Router()
  .get("/user", userGetController)
  .post("/user", userPostController)
  .get("/user/:user_id", userGetControllerById)
  .delete("/user/:user_id", userDeleteController)
  .put("/user/:user_id", userPutController)
  .get("/user/:email", userGetControllerByEmail);

module.exports = UserRouter;
