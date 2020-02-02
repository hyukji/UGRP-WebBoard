const express = require("express");
const router = express.Router();

module.exports = router;

const mongoose = require("mongoose");

const Board = require("../models/board");
const Comment = require("../models/comment");

//로그인 여부 확인 함수.
var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
};

router.get("/write", isAuthenticated, function(req, res) {
  res.render("write", {
    page: "WRITE NEW"
  });
});

router.get("/posting/:id/edit", isAuthenticated, function(req, res) {
  Board.findOne({ _id: req.params.id }, function(err, board) {
    if (board) {
      res.render("edit", {
        page: "EDIT PAGE",
        board: board
      });
    }
  });
});

router.get("/posting/:id/del", (req, res, next) => {
  Board.findOneAndDelete({ _id: req.params.id }, function(err, result) {
    // Comment.find({ post: req.params.id }, function(err, comments) {
    //   comments.forEach(function(comment) {});
    Comment.findByIdAndDelete({ post: req.params.id }, function() {});
  });
  //댓글도 지워야함 까먹었음!
  res.redirect("/home");
});

router.get("/posting/:id/comment/:commentid/del", (req, res, next) => {
  Comment.findOneAndDelete({ _id: req.params.commentid }, function(
    err,
    result
  ) {
    res.redirect("/posting/" + req.params.id);
  });
});

router.get("/posting/:id", isAuthenticated, function(req, res) {
  Board.findOne({ _id: req.params.id }, function(err, posting) {
    //console.log(post);
    Comment.find({ post: req.params.id })
      .sort({ createdAt: -1 })
      .exec(function(err, commentelements) {
        res.render("post", {
          postdata: posting,
          usinguser: req.user.id,
          commentdata: commentelements
        });
      });
  });
});

router.get("/write/success", (req, res) =>
  res.render("success", {
    page: "write success",
    message: ""
  })
);

router.post("/write", (req, res, next) => {
  // console.log(req.body);
  const newboard = new Board({
    _id: new mongoose.Types.ObjectId(),
    writer: req.user.id,
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

router.post("/posting/:id/comment", (req, res, next) => {
  const newcomment = new Comment({
    _id: new mongoose.Types.ObjectId(),
    post: req.params.id,
    writer: req.user.id,
    body: req.body.comment
  });
  newcomment
    .save()
    .then(result => {
      res.redirect("/posting/" + req.params.id);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/posting/:id/edit", (req, res, next) => {
  Board.findByIdAndUpdate(
    { _id: req.params.id },
    { body: req.body.body },
    function(err, result) {
      res.redirect("/posting/" + req.params.id);
    }
  );
});
