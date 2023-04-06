var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const express = require("express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

const mongoose = require("mongoose");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log(req.method, req.url, req.headers, req.path, new Date());
  next();
});
app.use((req, res, next) => {
  if (true) {
    throw new Error("Error in req");
  }
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.use((req,res,next)=>{
  const authorization = req.headers.authorization;
  if(!authorization) return next(new Error("unauthorized"));
  next();
})
// to connet the db mongoose
mongoose.connect("mongodb://localhost:27017/blogApp", function (err, db) {
  if (err) {
    console.log("err while stablish connection in db", err);
  }
  console.log("connected to database");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render("error");
  console.log("error :", err);
  res.send("error happemd");
});
const dotenv = require("dotenv");

dotenv.config();
 
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
 