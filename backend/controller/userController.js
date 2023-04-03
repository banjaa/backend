const User = require("../database/model/users");
const bcrypt = require("bcrypt");

const {
  GetUserById,
  CreateUser,
  UserDelete,
  UserUpdate,
  GetUserByEmail,
} = require("../query/userQuery");

exports.userGetControllerById = async (req, res) => {
  try {
    const result = await GetUserById(req);
    res.status(201).send(result);
  } catch (err) {
    res.status(201).send(err.message);
  }
};

exports.userGetControllerByEmail = async (req, res) => {
  try {
    const result = await GetUserByEmail(req);
    res.status(201).send(result);
  } catch (err) {
    res.send(err.message);
  }
};

exports.userGetController = async (req, res) => {
  const result = await User.find();
  res.status(201).send({ data: result });
};

exports.userPostController = async (req, res) => {
  try {
    await CreateUser(req);
    res.status(201).send(" Successfully created new user ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.userDeleteController = async (req, res) => {
  try {
    await UserDelete(req);
    res.status(201).send(" Successfully deleted  user ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.userPutController = async (req, res) => {
  try {
    await UserUpdate(req);
    res.status(201).send(" User is successfully updated ");
  } catch (err) {
    res.send(err.message);
  }
};

// exports.userLogin = async (req, res) => {
//     const { password, email } = req.body;
//     const user = await User.findOne({ email: email });
//     const hash = bcrypt.compare(password, user.password);

//     if (!user) res.send(" You don't have any user account, please sign up ");

//     if (hash) {
//         const token = await TokenGenerator({ uid: user._id, expires: '1d' });
//         res.send({ token: token });
//         return;
//     } else {
//         res.send('Invalid password or email');
//         return;
//     }
// };
