import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import "boxicons";

const Meal = ({ meal }) => {
  const { deleteMeal } = useContext(GlobalContext);
  if (!meal) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderLeft: `8px solid ${meal.color}` }}
    >
      <span className="block w-full">{meal.name}</span>
      <span className="block w-full font-bold">{meal.calories} Cal</span>
      <button
        onClick={() => {
          deleteMeal(meal._id);
        }}
        className="px-3"
      >
        <box-icon name="trash" color="red"></box-icon>
      </button>
    </div>
  );
};

const MealList = () => {
  const { mealData, getMeal, userName } = useContext(GlobalContext);
  useEffect(() => {
    if (userName !== "") {
      getMeal(userName);
    }
  }, [mealData]);
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">Breakfast</h1>
      {mealData
        .filter((meal) => {
          return meal.mealType === "Breakfast";
        })
        .map((meal) => {
          return <Meal key={meal._id} meal={meal} />;
        })}
      <h1 className="py-4 font-bold text-xl">Lunch</h1>
      {mealData
        .filter((meal) => {
          return meal.mealType === "Lunch";
        })
        .map((meal) => {
          return <Meal key={meal._id} meal={meal} />;
        })}

      <h1 className="py-4 font-bold text-xl">Dinner</h1>
      {mealData
        .filter((meal) => {
          return meal.mealType === "Dinner";
        })
        .map((meal) => {
          return <Meal key={meal._id} meal={meal} />;
        })}
    </div>
  );
};

export default MealList;
