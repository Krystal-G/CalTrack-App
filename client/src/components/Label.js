import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const LabelComponent = ({ data }) => {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ backgroundColor: data.color ?? "#003e29" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0}%</h3>
    </div>
  );
};

const Label = () => {
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
        case "Dinner":
          dinnerCalories += meal.calories;
          break;
      }
    }
  };
  calculateCalories(mealData);
  totalCalories = breakfastCalories + lunchCalories + dinnerCalories;
  const labelCompData = [
    {
      type: "Breakfast",
      color: "rgb(255, 99, 132)",
      percent:
        totalCalories === 0
          ? 0
          : Math.round((100 * breakfastCalories) / totalCalories),
    },
    {
      type: "Lunch",
      color: "rgb(54, 162, 235)",
      percent:
        totalCalories === 0
          ? 0
          : Math.round((100 * lunchCalories) / totalCalories),
    },
    {
      type: "Dinner",
      color: "rgb(255, 205, 86)",
      percent:
        totalCalories === 0
          ? 0
          : Math.round((100 * dinnerCalories) / totalCalories),
    },
  ];
  return (
    <>
      {labelCompData.map((data, ind) => (
        <LabelComponent key={ind} data={data}></LabelComponent>
      ))}
    </>
  );
};

export default Label;
