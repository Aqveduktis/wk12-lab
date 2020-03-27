import React, { useState } from "react";

export const Back = ({ info }) => {
  return (
    <article className="mycard back" style={{ backgroundColor: info.primarycolor }}>
      <div className="backTop">
        <h2>{info.title}</h2>
      </div>
      <div
        className="backBottom"
        style={{ backgroundColor: info.secondarycolor }}
      >
        <p className="image"> {info.emoji} </p>
      </div>
    </article>
  );
};