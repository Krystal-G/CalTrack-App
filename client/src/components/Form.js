import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Form = () => {
  const [name, setName] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const [calories, setCalories] = useState("");
  const { addMeal } = useContext(GlobalContext);

  const submitForm = (e) => {
    e.preventDefault();
    const newMeal = {
      name: name,
      calories: +calories,
      mealType: mealType,
    };
    if (!newMeal.name) {
      alert("Please enter the meal!!!!");
    }
    if (newMeal.calories <= 0) {
      alert("Please enter valid calore amount for the meal!!!!");
    }
    addMeal(newMeal);
    setName("");
    setCalories(0);
    setMealType("Breakfast");
  };

  return (
    <>
      <h1 className="font-bold pb-4 text-xl">Add Meal</h1>

      <form id="form" onSubmit={submitForm}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Add food to track"
              autoComplete="off"
              className="form-input"
            ></input>
          </div>
          <select
            value={mealType}
            onChange={(e) => {
              setMealType(e.target.value);
            }}
            className="form-input"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <div className="input-group">
            <input
              type="number"
              value={calories}
              onChange={(e) => {
                setCalories(e.target.value);
              }}
              placeholder="Calories (in KCal) "
              autoComplete="off"
              className="form-input"
            ></input>
          </div>
          <div className="submit-btn">
            <button type="submit" className="border py-2 w-full">
              Track Meal
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
