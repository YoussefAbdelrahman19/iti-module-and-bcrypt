const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect;
//besfor create model we should create schema
const userSchema = new mongoose.Schema({
  id: Number,
  firstName: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
  },
  lastName: { type: String, required: true, lowercase: true, unique: true },
  email: { type: "string", required: true, unique: true, index: true },
  address: String,
  age: Number,
  dob: { type: Date },
  password: { type: "string" },
});
userSchema.methods.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

userSchema.statics.countUsersByName = function (name, cb) {
  this.count({ firstName: name }, cb);
};
// this middleware will run always twice before creating new instance and when we update any instance
// we should put condition while update pass because it will hash the hashed value
userSchema.pre("save", function (next) {
// to check if the document is new or not
if (this.isNew) {
// we should hash the pass before saving in the database
// hash pass
// replace password property with hashed value
next() //to make the action continuo to database
// to hash you should to install bcyrpt npm i bcrypt
// i will hash the document and 'this' is the whole document
// 10 the second param is the complixcity of the hash
// third is a call back fn apply after hashing finshed and should be asunc to does not block the code till it finishs
    bcrypt.hash(this.password, 10, async (err, hashedPassword) => {
      this.password = hashedPassword;
      next();
    });
  } else {
    next();
  }
});
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
