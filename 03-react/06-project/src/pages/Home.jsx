import React from "react";
import { Link } from "react-router";
import { routes } from "../lib/utils/constants";

const Home = () => {
  return (
    <>
      <h1>This is home page</h1>
      <Link to={routes.LOGIN}>Home</Link>
    </>
  );
};

export default Home;
