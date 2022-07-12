import React from "react";
import Graph from "./Graph";
import Label from "./Label";

const LeftContainer = () => {
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <Graph></Graph>
        <div className="flex flex-col py-10 gap-4">
          <Label></Label>
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
