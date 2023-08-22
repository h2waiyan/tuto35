const db = require("../models/index");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
  const aTuto = {
    title: req.body.title,
    desc: req.body.desc,
    published: req.body.published ? req.body.published : false,
  };

  Tutorial.create(aTuto)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "fail",
        message: err.message || "Something wrong when creating tuto.",
      });
    });
};
