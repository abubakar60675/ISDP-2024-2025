import React from "react";

const StudentCard1 = ({
  id,
  name,
  age,
  gender,
  isStudent,
  students,
  setStudents,
}) => {
  const handleDelete = (deleteId) => {
    const newStudents = students.filter((student) => student.id !== deleteId);

    setStudents(newStudents);
  };

  return (
    <>
      <li className="bg-gray-700 p-2 rounded text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Student :{isStudent ? "Yes" : "No"}</p>
          </div>
          <button
            className="p-2 rounded bg-orange-500 text-white max-h-fit"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default StudentCard1;
