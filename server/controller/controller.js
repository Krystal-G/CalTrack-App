const bcrypt = require("bcrypt");
const model = require("../models/models");

//get: http://localhost:8080/api/meal
async function get_Meal(req, res) {
  let data = await model.Meal.find({});
  return res.json(data);
}

//get : http:localhsot:8080/api/meal/byUser
async function get_Meal_By_User(req, res) {
  let data = await model.Meal.find({ byUser: req.params.byUser });
  // console.log(req.params.byUser);
  return res.status(200).json(data);
}

//post: http://localhost:8080/api/meal
async function add_Meal(req, res) {
  if (!req.body)
    return res.status(400).json("No data provided to post request");

  let { name, mealType, calories, byUser } = req.body;
  const newMeal = await new model.Meal({
    name,
    mealType,
    calories,
    byUser,
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

// post : http://localhost:8080/api/register

async function register_User(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      msg: "All credentials are not provided",
    });
  }

  const user = await model.User.findOne({ email });
  if (user) {
    return res.status(400).json({
      msg: "User with email id already exists",
    });
  }

  const user1 = await model.User.findOne({ username });
  if (user1) {
    return res.status(400).json({
      msg: "Username already exists",
    });
  }

  const newUser = new model.User({ username, email, password });
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      return res.status(400).json({
        msg: "Cannot register user",
      });
    }
    newUser.password = hash;
    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(200).json({
        msg: "Success",
      });
    }
  });
}

// post : http://localhost:8080/api/login

async function login_User(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      msg: "All credentials are not provided",
    });
  }

  const user = await model.User.findOne({ username });
  if (!user) {
    return res.status(400).json({
      msg: "No user found",
    });
  }

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(400).json({
        msg: "Cannot login user",
      });
    }
    if (result) {
      const userSession = { email: user.email };
      req.session.user = userSession;
      return res.status(200).json({
        msg: "Success",
        userSession,
        username: user.username,
      });
    } else {
      return res.status(400).json({
        msg: "Invalid password",
      });
    }
  });
}

module.exports = {
  add_Meal,
  get_Meal,
  delete_Meal,
  register_User,
  login_User,
  get_Meal_By_User,
};
