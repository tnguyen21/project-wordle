import React from "react";

import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((n) => (
        <span className={`cell ${value ? value[n].status : ""}`} key={n}>
          {value ? value[n].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
