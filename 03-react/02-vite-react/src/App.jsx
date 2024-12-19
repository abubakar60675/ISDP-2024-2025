import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyCard from "./Card";
import CounterCard from "./CounterCard";
import { NameCard1, NameCard as NameCard2 } from "./NameCard";
import NestedCards from "./NestedCards";
import { Card1, Card2, Card3 } from "./MultipleCards";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <MyCard />
      <CounterCard />
      <NameCard1 />
      <NameCard2 />

      <Card1 />
      <Card2 />
      <Card3 />
      <NestedCards />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
