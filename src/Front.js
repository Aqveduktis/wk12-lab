import React, { useState } from "react";

export const Front = ({ info, setDone }) => {
  const handleClick = () => {
    setDone(true);
  };

  return (
    <article className="mycard">
      <div className="frontTop" style={{ backgroundColor: info.primarycolor }}>
        <h2>{info.title}</h2>
        <span role="img"> {info.emoji} </span>
      </div>
      <div
        className="frontBottom"
        style={{ backgroundColor: info.secondarycolor }}
      >
        <button onClick={handleClick}>{info.button}</button>
      </div>
    </article>
  );
};