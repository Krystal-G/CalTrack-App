const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// meal
const Meal_Schema = new Schema({
  name: {
    type: String,
  },
  mealType: {
    type: String,
  },
  calories: {
    type: Number,
  },
  byUser: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Meal = mongoose.model("Meal", Meal_Schema);

// User
const User_Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", User_Schema);

exports.default = Meal;
module.exports = {
  Meal,
  User,
};
