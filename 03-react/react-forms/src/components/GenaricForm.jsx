import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  gender: "female",
  isTeacher: false,
  country: "",
  dateOfBirth: "",
};

const GenaricForm = () => {
  const [user, setUser] = useState(initialState);
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "isTeacher") {
      setUser({ ...user, [name]: event.target.checked });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user", user);
    setUsers([...users, { ...user, id: Date.now() }]);
    setUser(initialState);
  };
  console.log("users", users);

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter first name"
              className="w-full outline-none px-2 py-3 border"
              value={user.firstName}
              onChange={handleChange}
              name="firstName"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter last name"
              className="w-full outline-none px-2 py-3 border "
              value={user.lastName}
              onChange={handleChange}
              name="lastName"
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="w-full outline-none px-2 py-3 border "
              value={user.username}
              onChange={handleChange}
              name="username"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className="w-full outline-none px-2 py-3 border "
              value={user.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full outline-none px-2 py-3 border "
              value={user.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div>
            <label htmlFor="gender" className="inline-block">
              Gender
            </label>
            <br />
            <input
              type="radio"
              id="male"
              value="male"
              name="gender"
              onChange={handleChange}
              checked={user.gender === "male"}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              checked={user.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="isTeacher"
              id="isTeacher"
              checked={user.isTeacher}
              onChange={handleChange}
            />
            <label htmlFor="isTeacher">Is Teacher?</label>
          </div>
          <div>
            <label htmlFor="country" className="block">
              Country
            </label>
            <select
              name="country"
              id="country"
              className="w-full outline-none px-2 py-3 border "
              value={user.country}
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full outline-none px-2 py-3 border "
              value={user.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-400 text-white border px-2 py-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-5">
        {users.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.email}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GenaricForm;
