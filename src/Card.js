import React, { useState } from "react";
import { Front } from "./Front";
import { Back } from "./Back";

export const Card = ({ info }) => {
  const [done, setDone] = useState(false);
  const smile = "\u{1F984}";
  return (
    <div>
      {!done && <Front info={info} setDone={setDone} />}
      {done && <Back info={info} />}
    </div>
  );
};