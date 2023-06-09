const {
  AddCommment,
  CommentDelete,
  CommentUpdate,
} = require("../query/CommentQuery");

exports.commentPutController = async (req, res) => {
  try {
    await AddCommment(req);
    res.status(201).send(" Successfully created added comment ");
  } catch (err) {
    res.send(err.message);
  }
};

exports.commentDeleteController = async (req, res) => {
  try {
    const result = await CommentDelete(req);
    res.status(201).send(result);
  } catch (err) {
    res.send(err.message);
  }
};

exports.commentUpdateController = async (req, res) => {
  try {
    await CommentUpdate(req);
    res.status(201).send("comment is successfully deleted");
  } catch (err) {
    res.send(err.message);
  }
};
