import React from "react";

const labelCompData = [
  {
    type: "Breakfast",
    color: "green",
    percent: 30,
  },
  {
    type: "Lunch",
    color: "yellow",
    percent: 45,
  },
  {
    type: "Dinner",
    color: "red",
    percent: 25,
  },
];

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
  return (
    <>
      {labelCompData.map((data, ind) => (
        <LabelComponent key={ind} data={data}></LabelComponent>
      ))}
    </>
  );
};

export default Label;
