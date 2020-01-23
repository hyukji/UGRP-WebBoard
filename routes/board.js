const express = require("express");
const router = express.Router();

module.exports = router;

const mongoose = require("mongoose");

const Board = require("../models/board");

//로그인 여부 확인 함수.
var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
};

router.get("/write", isAuthenticated, function(req, res) {
  res.render("write");
});

router.get("/write/success", (req, res) =>
  res.render("success", {
    page: "write success",
    message: ""
  })
);

router.post("/write", (req, res, next) => {
  console.log(req.body);
  const newboard = new Board({
    _id: new mongoose.Types.ObjectId(),
    writer: req.session.message,
    title: req.body.title,
    body: req.body.body
  });
  newboard
    .save()
    .then(result => {
      //console.log(result);
      res.redirect("/write/success");
    })
    .catch(err => {
      console.log(err);
    });
});
