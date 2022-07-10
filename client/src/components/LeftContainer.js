import React from "react";
import Form from "./Form";
import MealList from "./MealList";

const LeftContainer = () => {
  return (
    <div className="form max-w-sm mx-auto w-96">
      <Form />
      <MealList />
    </div>
  );
};

export default LeftContainer;
