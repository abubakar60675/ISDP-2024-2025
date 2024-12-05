import React, { useState } from "react";

const stundent = {
  id: 1,
  name: "Ali",
};
const Card = () => {
  const [count, setCount] = React.useState(0);
  const { name: studentName } = stundent;
  console.log("Student name", stundent.name);
  console.log("Student destructure name", studentName);
  console.log("react count", count);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="card">
        <button onClick={handleIncrement}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
};

export default Card;
