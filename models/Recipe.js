const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  instructions: { type: String, required: true },
  image: { type: String }, // Store image URL
  category: { type: String, enum: ["breakfast", "lunch", "dinner", "dessert"] }, // Added category
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      value: { type: Number, min: 1, max: 5 },
    },
  ], // Ratings
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
      replies: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
          text: String,
        },
      ],
    },
  ], // Comments
});

module.exports = mongoose.model("Recipe", RecipeSchema);
