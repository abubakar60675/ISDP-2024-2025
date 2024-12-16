import React, { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("name", name);
    console.log("email", email);
  };
  console.log("hi, here");
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Enter name"
          className="w-full outline-none px-2 py-3 border "
          ref={nameRef}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full outline-none px-2 py-3 border "
          ref={emailRef}
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

export default RefForm;
