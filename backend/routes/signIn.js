const express = require("express");
const router = express.Router();
const User = require("../models/user");
const crypto = require("crypto"); //Node.js 에서 제공하는 암호화 모듈
//const properties = require('../properties/key.js');
// mapping
// Login

router.post("/", function(req, res, next) {
  User.findOne({ id: req.body.user.id}, function(err, db_user) {
    // 구문 error
    if (err) {
      //next(err);
      console.log(err);
      return res.status(500).json({error: 'Syntax error'});
    }
    //User가 없으면 error
    if (!db_user) {
      console.log('user not found');
      return res.status(404).json({msg: 'User not found'});
      }

    //req.session.user_id = req.body.user.id;
    res.json(db_user);
  });
});

module.exports = router;
