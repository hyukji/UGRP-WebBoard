const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var methodOverride = require("method-override"); //_method의 query로 들어오는 값으로 HTTP의 method을 바꿈

//로그인을 위한 모듈들.
const passport = require("passport"); //인증
const LocalStrategy = require("passport-local").Strategy; //로컬로그인
const Session = require("express-session"); //세션
const flash = require("connect-flash"); //세션을 데이터베이스에 저장
var MongoDBStore = require("connect-mongodb-session")(Session); //플래시 메시지

// DB연결
let url = "mongodb://localhost:27017/dalhav";
mongoose.connect(url, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

//여기 부터 밑에 로그인을 위한 코드.
app.use(flash());

var store = new MongoDBStore({
  //세션을 저장할 공간
  uri: url, //db url
  collection: "sessions" //콜렉션 이름
});

store.on("error", function(error) {
  //에러처리
  console.log(error);
});

app.use(
  Session({
    secret: "dalhav", //세션 암호화 key
    resave: false, //세션 재저장 여부
    saveUninitialized: true,
    rolling: true, //로그인 상태에서 페이지 이동 시마다 세션값 변경 여부
    cookie: { maxAge: 1000 * 60 * 60 }, //유효시간
    store: store
  })
);

app.use(passport.initialize());
app.use(passport.session());

// routes
const indexRoute = require("./routes/index");
const boardRoute = require("./routes/board");

// 뷰엔진 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
//app.use(express.static(__dirname + "/public"));

// use routes
app.use("/", indexRoute);
app.use("/posting", boardRoute);

//listen
app.listen(PORT, function() {
  console.log("Example app listening on port", PORT);
});
