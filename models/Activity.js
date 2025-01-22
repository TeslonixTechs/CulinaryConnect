const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["like", "comment", "create"] },
  recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Activity", ActivitySchema);
