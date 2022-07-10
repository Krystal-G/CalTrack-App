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
  date: {
    type: Date,
    default: Date.now,
  },
});

const Meal = mongoose.model("Meal", Meal_Schema);

exports.default = Meal;
module.exports = {
  Meal,
};
