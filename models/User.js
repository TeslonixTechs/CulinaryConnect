const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" }, // Added role field
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }], // Favorites
  mealPlan: [
    {
      date: Date,
      recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    },
  ],
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
