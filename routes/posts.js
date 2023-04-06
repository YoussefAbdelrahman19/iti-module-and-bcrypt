const express = require("express");
const Router = express.Router();
const PostsModel = require("../models/posts");

Router.get("/", (req, res, next) => {});
Router.get("/:id", (req, res, next) => {
  //   PostsModel.findById(req.params.id)
  //     .populate({ path: "author", select: ["firstName", "lastName", "Age"] })
  //     .exec((err, post) => {
  //       res.status(200).json({ message: "user post ", post });
  //     });
  // this will make a populate while finding
  PostsModel.findById(req.params.id, (err, post) => {
    post.populate("author").exec((err, post) => {
      if (err) {
        res
          .status(500)
          .json({ message: "There is an error while finding a post" });
      }
      res.status(200).json({ message: "Success finding a post", post });
    });
  });
});

Router.post("/", (req, res, next) => {
  const postData = req.body;
  console.log("req body ", req.body);
  console.log("post data", postData);
  let post = new PostsModel({
    title: postData.title,
    body: postData.body,
    author: postData.author,
  });
  console.log("post", post);
  post.save((err, postInstance) => {
    if (err) {
      res
        .status(404)
        .json({ message: "error creating post and there error is :", err });
    }
    res.status(200).json({ message: "post created", post: postInstance });
  });
});

module.exports = Router;
