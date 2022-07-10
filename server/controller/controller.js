const model = require("../models/models");

//get: http://localhost:8080/api/meal
async function get_Meal(req, res) {
  let data = await model.Meal.find({});
  return res.json(data);
}

//post: http://localhost:8080/api/meal
async function add_Meal(req, res) {
  if (!req.body)
    return res.status(400).json("No data provided to post request");

  let { name, mealType, calories } = req.body;
  const newMeal = await new model.Meal({
    name,
    mealType,
    calories,
  });

  newMeal.save((err) => {
    if (!err) return res.status(200).json(newMeal);

    return res.status(400).json(`Error while adding meal:- ${err}`);
  });
}

//delete: http://localhost:8080/api/meal/id
async function delete_Meal(req, res) {
  if (!req.body) {
    return res.status(400).json("No data provided to post request");
  }
  const meal = await model.Meal.findById(req.params.id);
  if (!meal) {
    return res.status(404).json("Not found");
  }
  await meal.remove();
  return res.status(200).json("Deleted");
}

module.exports = {
  add_Meal,
  get_Meal,
  delete_Meal,
};
