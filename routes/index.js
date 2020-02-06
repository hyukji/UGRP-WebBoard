//클라이언트 요청에 따라 서버가 어떤 응답하겠다 를 정해놓은 파일)

const express = require("express");
const router = express.Router();

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

module.exports = router;

const User = require("../models/user");
const Board = require("../models/board");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt-nodejs");

//로그인 여부 확인 함수.
var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
};

router.get("/", function(req, res) {
  if (req.isAuthenticated()) {
    res.redirect("/home");
  } else {
    res.render("index");
  }
});

router.get("/home", isAuthenticated, function(req, res) {
  Board.find()
    .sort({ createdAt: -1 })
    .exec(function(err, elements) {
      res.render("home", {
        message: req.user.id,
        boarddata: elements,
        num: elements.length
      });
    });
});
router.get("/login", function(req, res) {
  res.render("login", { page: "login", what: "" });
});
router.get("/login/error", (req, res) =>
  res.render("login", { page: "login", what: "Wrong id/pw" })
);
router.get("/login/success", isAuthenticated, function(req, res) {
  res.render("success", {
    page: "login success",
    message: req.user.id
  });
});
router.get("/signup", (req, res) =>
  res.render("signup", { page: "signup", what: "" })
);
router.get("/signup/error", (req, res) =>
  res.render("signup", {
    page: "signup",
    what: "That school num already exist"
  })
);
router.get("/signup/success", (req, res) =>
  res.render("success", {
    page: "signup success",
    message: ""
  })
);
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/signup" || "/signup/error", (req, res, next) => {
  console.log(req.body);

  User.find({ schoolnum: req.body.schoolnum }, function(error, user) {
    if (error) {
      console.log("error-findone user from db in signup");
    } else {
      if (user.length < 1) {
        // 암호화 시키기
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newuser = new User({
          _id: new mongoose.Types.ObjectId(),
          id: req.body.id,
          schoolnum: req.body.schoolnum,
          name: req.body.name,
          password: hash
        });
        newuser
          .save()
          .then(result => {
            //console.log(result);
            res.redirect("/signup/success");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        res.redirect("/signup/error");
      }
    }
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "id",
      passwordField: "password",
      passReqToCallback: true //request callback 여부
    },
    function(req, id, password, done) {
      User.findOne(
        {
          id: id
          //password: password
        },
        function(err, user) {
          if (err) {
            throw err;
          } else if (!user) {
            return done(
              null,
              false,
              req.flash("login_message", "해당아이디는 존재하지 않습니다.")
            ); // 로그인 실패
          } else {
            var result = bcrypt.compareSync(password, user.password);
            if (result) {
              req.flash("login_message", id);
              return done(null, user); // 로그인 성공
            } else {
              return done(
                null,
                false,
                req.flash("login_message", "비밀번호가 틀렸습니다.")
              );
            }
          }
        }
      );
    }
  )
);

/*
Passport.js 는 Strategy를 이용해서 user를 디비에 저장하고 
serialize user를 통해 세션을 생성하고 
deserialize user를 통해 req.user 객체에 유저 정보를 저장한다.
*/

//로그인에 성공할 시 serializeUser 메서드를 통해서 사용자 정보를 세션에 저장
passport.serializeUser(function(user, done) {
  done(null, user);
});

//사용자 인증 후 요청이 있을 때마다 호출
passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.post(
  "/login" || "/login/error",
  passport.authenticate("local", {
    failureRedirect: "/login/error",
    failureFlash: true
  }), // 인증 실패 시 '/login'으로 이동
  function(req, res) {
    res.redirect("/login/success");
    //로그인 성공 시 '/'으로 이동
  }
);
