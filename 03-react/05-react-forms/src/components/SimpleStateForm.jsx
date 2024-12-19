import React, { useRef, useState } from "react";

const SimpleStateForm = () => {
  const [name, setName] = useState("rrr");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log("name", name);
    console.log("email", email);
    const payload = {
      name: name,
      email: email,
    };
    console.log("payload", payload);
  };
  console.log("hi, here");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("event hhh", event);
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Enter name"
          className="w-full outline-none px-2 py-3 border "
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full outline-none px-2 py-3 border "
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="bg-blue-400 text-white border px-2 py-3"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default SimpleStateForm;
