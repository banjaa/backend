const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectionString =
  "mongodb+srv://sumber:sum2008@cluster0.evxb83e.mongodb.net/news";
exports.connectDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`Successfully connected`);
    return `Mongoose Connected`;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
