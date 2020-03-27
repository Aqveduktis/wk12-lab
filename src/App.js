import React from "react";
import { Card } from "./Card";
import { stuff } from "./Stuff";
import "./index.css";
import "./card.css";

export const App = () => {
  return (
    <div className="App">
      <Card info={stuff[0]} />
      <Card info={stuff[1]} />
      <Card info={stuff[2]} />
      <Card info={stuff[3]} />
    </div>
  );
};
