import React from "react";

const Sort = () => {
  const [persons, setPersons] = React.useState(["Zahid", "Muneeb", "Ali"]);

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            let ps = [...persons];
            ps.sort();
            setPersons(ps);
          }}
        >
          Test Sort
        </button>
        <ul>
          {persons.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sort;
