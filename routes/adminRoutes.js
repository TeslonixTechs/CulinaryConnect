const express = require("express");
const { getUsers, deleteRecipe } = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

router.get("/users", adminMiddleware, getUsers);
router.delete("/recipes/:recipeId", adminMiddleware, deleteRecipe);

module.exports = router;
