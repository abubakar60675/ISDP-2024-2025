import React from "react";

const StudentCard = (props) => {
  return (
    <>
      <li className="bg-gray-700 p-2 rounded text-white">
        <div>
          <h2>{props.studentInfo.name}</h2>
          <p>Age: {props.studentInfo.age}</p>
          <p>Gender: {props.studentInfo.gender}</p>
        </div>
      </li>
    </>
  );
};

export default StudentCard;
