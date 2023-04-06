const mongoose = require("mongoose");
const ratingSchema = new mongoose.Schema({
  rating: { type: Number, min: 0, max: 5, required: true },
  onId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "onModel",
    required: true,
  }, //the id of the doc that i will attach
  onModel: { type: String, required: true, enum: ["User", "Post"] },
});
