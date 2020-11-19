import React, { useState, useMemo, useContext } from "react";
import { Display, ButtonOne } from "./Designstyled";
import { UseroneContext, UsertwoContext } from "../App";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const userone = useContext(UseroneContext);
  const usertwo = useContext(UsertwoContext);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div className="app">
        <header>
          <h1>
            {userone} {usertwo}
          </h1>
        </header>
      </div>
      <Display>
        <ButtonOne onClick={incrementOne}>
          Count One - {counterOne} - {isEven ? "Even" : "Odd"}
        </ButtonOne>
        <div>
          <ButtonOne data-testid="ctnNumber" onClick={incrementTwo}>
            Count Two - {counterTwo}
          </ButtonOne>
        </div>
      </Display>
    </div>
  );
}

export default Counter;
