import { useState } from "react";
import StudentCard from "./components/StudentCard";
import StudentCard1 from "./components/StudentCard1";
import { studentsData } from "./data";
import StudentCard2 from "./components/StudentCard2";
import StudentCard3 from "./components/StudentCard3";
function App() {
  const [students, setStudents] = useState(studentsData);
  const [id, setId] = useState(null);

  const handleClear = () => {
    setStudents([]);
  };

  console.log("id", id);

  const handleDelete = (deleteId) => {
    const newStudents = students.filter((student) => student.id !== deleteId);

    setStudents(newStudents);
  };

  const handleConfirmDelete = () => {
    const newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
    setId(null);
  };
  return (
    <>
      <h1 className="text-blue-900 text-center mt-5">Hello World!</h1>
      <div className="flex items-center justify-between p-5">
        <button
          onClick={handleClear}
          className="p-2 rounded bg-orange-500 text-white max-h-fit"
        >
          Clear Students
        </button>
        {/* {id ? (
          <button className="p-2 rounded bg-orange-500 text-white max-h-fit">
            Confirm Delete
          </button>
        ) : null} */}

        {id && (
          <button
            className="p-2 rounded bg-orange-500 text-white max-h-fit"
            onClick={handleConfirmDelete}
          >
            Confirm Delete
          </button>
        )}
      </div>
      <div className="p-5">
        {/* <ul className="grid grid-cols-3 gap-5">
          {students.map((student, index) => {
            return (
              <StudentCard key={index} studentInfo={student} isStudent={true} />
            );
          })}
        </ul> */}
        {/* <ul className="grid grid-cols-3 gap-5 mt-5">
          {students.map((student) => {
            return (
              <StudentCard1
                key={student.id}
                {...student}
                isStudent={true}
                students={students}
                setStudents={setStudents}
              />
            );
          })}
        </ul> */}
        <ul className="grid grid-cols-3 gap-5 mt-5">
          {students.map((student) => {
            return (
              <StudentCard2
                key={student.id}
                {...student}
                isStudent={true}
                setId={setId}
              />
            );
          })}
        </ul>

        {/* <ul className="grid grid-cols-3 gap-5 mt-5">
          {students.map((student) => {
            return (
              <StudentCard3
                key={student.id}
                {...student}
                isStudent={true}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul> */}
      </div>
    </>
  );
}

export default App;
