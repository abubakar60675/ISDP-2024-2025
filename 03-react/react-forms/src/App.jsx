import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import RefForm from "./components/RefForm";
import SimpleStateForm from "./components/SimpleStateForm";
import GenaricForm from "./components/GenaricForm";

function App() {
  return (
    <>
      <div className="max-w-xs m-auto flex items-center justify-center min-h-dvh">
        <div className="w-full flex flex-col gap-2">
          {/* <RefForm /> */}
          {/* <SimpleStateForm /> */}
          <GenaricForm />
        </div>
      </div>
    </>
  );
}

export default App;
