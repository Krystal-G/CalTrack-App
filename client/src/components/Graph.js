import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const graphConfig = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
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

const Graph = () => {
  const [breakCal, setBreak] = useState(0);
  const [lunchCal, setLunch] = useState(0);
  const [dinnerCal, setDinner] = useState(0);
  const { mealData, getMeal } = useContext(GlobalContext);

  function getCal() {
    let b = 0;
    let l = 0;
    let d = 0;
    mealData.forEach((meal) => {
      if (meal.mealType === "Breakfast") b += meal.calories;
      else if (meal.mealType === "Lunch") l += meal.calories;
      else if (meal.mealType === "Dinner") d += meal.calories;
    });
    setBreak(b);
    setLunch(l);
    setDinner(d);
  }

  useEffect(() => {
    getMeal();
    getCal();
  }, [mealData]);

  const totalCal = breakCal + lunchCal + dinnerCal;

  return (
    <>
      <div className="chart">
        <Doughnut {...graphConfig}></Doughnut>
        <h3 className="total mt-4 font-bold">
          Total
          <span className="block mt-3 text-3xl">{totalCal} KCal</span>
        </h3>
      </div>
    </>
  );
};

export default Graph;
