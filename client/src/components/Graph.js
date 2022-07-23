import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const Graph = () => {
  const { mealData } = useContext(GlobalContext);
  let breakfastCalories = 0;
  let lunchCalories = 0;
  let dinnerCalories = 0;
  let totalCalories = 0;
  const calculateCalories = (meals) => {
    for (let meal of meals) {
      switch (meal.mealType) {
        case "Breakfast":
          breakfastCalories += meal.calories;
          break;
        case "Lunch":
          lunchCalories += meal.calories;
          break;
        default:
          dinnerCalories += meal.calories;
          break;
      }
    }
  };
  calculateCalories(mealData);
  totalCalories = breakfastCalories + lunchCalories + dinnerCalories;
  const graphConfig = {
    data: {
      datasets: [
        {
          data: [breakfastCalories, lunchCalories, dinnerCalories],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          borderRadius: 20,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return (
    <>
      <div className="chart">
        <Doughnut {...graphConfig}></Doughnut>
        <h3 className="total mt-4 font-bold">
          Total
          <span className="block mt-3 text-3xl">{totalCalories} Cal</span>
        </h3>
      </div>
    </>
  );
};

export default Graph;
