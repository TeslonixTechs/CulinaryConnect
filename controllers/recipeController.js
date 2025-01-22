const Recipe = require("../models/Recipe");
const User = require("../models/User");

const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      image: req.file ? req.file.path : null,
      createdBy: req.user.id,
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("createdBy", "name");
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const rateRecipe = async (req, res) => {
  try {
    const { recipeId, value } = req.body;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) return res.status(404).json({ error: "Recipe not found" });

    const existingRating = recipe.ratings.find(
      (r) => r.user.toString() === req.user.id
    );
    if (existingRating) {
      existingRating.value = value;
    } else {
      recipe.ratings.push({ user: req.user.id, value });
    }
    await recipe.save();
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const { recipeId } = req.body;
    const user = await User.findById(req.user.id);
    const index = user.favorites.indexOf(recipeId);
    if (index > -1) {
      user.favorites.splice(index, 1);
    } else {
      user.favorites.push(recipeId);
    }
    await user.save();
    res.status(200).json(user.favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createRecipe, getRecipes, rateRecipe, toggleFavorite };
