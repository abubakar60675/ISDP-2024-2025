import React from "react";

const MyPersonalCard = () => {
  return <h2>This is a personal card</h2>;
};

const ISDPCard = () => {
  return <h2>This is an ISDB card</h2>;
};

const NestedCards = () => {
  return (
    <>
      <h1>Hello Hy,</h1>
      <MyPersonalCard />
      <ISDPCard />
    </>
  );
};

export default NestedCards;
