import { useState } from "react";

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
  const [userFormData, setUserFormData] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "isTeacher") {
      setUserFormData({ ...userFormData, [name]: event.target.checked });
    } else {
      setUserFormData({ ...userFormData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("userFormData", userFormData);

    if (isEditing) {
      const newUsers = users.map((item) =>
        item.id === userFormData.id ? { ...userFormData } : item
      );
      setUsers(newUsers);
    } else {
      setUsers([...users, { ...userFormData, id: Date.now() }]);
    }

    setUserFormData(initialState);
    if (isEditing) {
      setIsEditing(false);
    }
  };
  console.log("isEditing", isEditing);

  const handleDeleteUser = (id) => {
    const newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
  };

  const handleUpdateUser = (user) => {
    console.log("user", user);
    setUserFormData(user);
    setIsEditing(true);
    // const foundUser = users.find((item) => item.id === id);
    // console.log("foundUser", foundUser);
  };

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
              value={userFormData.firstName}
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
              value={userFormData.lastName}
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
              value={userFormData.username}
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
              value={userFormData.email}
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
              value={userFormData.password}
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
              checked={userFormData.gender === "male"}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              value="female"
              name="gender"
              checked={userFormData.gender === "female"}
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="isTeacher"
              id="isTeacher"
              checked={userFormData.isTeacher}
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
              value={userFormData.country}
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
              value={userFormData.dateOfBirth}
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
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Gender</th>
              <th>Is Teacher</th>
              <th>Country</th>
              <th>Date of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.gender === "male" ? "Male" : "Female"}</td>
                  <td>{item.isTeacher ? "Yes" : "No"}</td>
                  <td>{item.country}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>
                    <div>
                      <button
                        className="bg-blue-400 text-white border px-2 py-3"
                        onClick={() => handleDeleteUser(item.id)}
                      >
                        Delete
                      </button>
                      <button onClick={() => handleUpdateUser(item)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GenaricForm;
