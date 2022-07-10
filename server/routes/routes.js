const routes = require("express").Router();
const controllers = require("../controller/controller");

routes.route("/api/meal").post(controllers.add_Meal).get(controllers.get_Meal);

routes.route("/api/meal/:id").delete(controllers.delete_Meal);

module.exports = routes;
