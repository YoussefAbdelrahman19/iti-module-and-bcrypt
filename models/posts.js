const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: "string",
    // required: true,
    maxLength: 20,
    // defaultValue: "title of the post ",
  },
  body: {
    type: "string",
    maxLength: 200,
  },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
