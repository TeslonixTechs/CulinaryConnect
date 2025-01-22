const express = require("express");
const { rateRecipe, toggleFavorite } = require("../controllers/recipeController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const multer = require("multer");
const { createRecipe, getRecipes } = require("../controllers/recipeController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createRecipe);
router.get("/", getRecipes);
router.post("/rate", authMiddleware, rateRecipe);
router.post("/favorite", authMiddleware, toggleFavorite);

module.exports = router;
