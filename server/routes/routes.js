const routes = require("express").Router();
const controllers = require("../controller/controller");

routes.route("/api/meal").post(controllers.add_Meal).get(controllers.get_Meal);

routes.route("/api/meal/:id").delete(controllers.delete_Meal);

routes.route("/api/meal/:byUser").get(controllers.get_Meal_By_User);

routes.route("/api/register").post(controllers.register_User);

routes.route("/api/login").post(controllers.login_User);

module.exports = routes;
