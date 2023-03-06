import React, { useState } from 'react';

export function CounterFunction() {
  const [input, setInput] = useState(0);

  const functionToChangeInput = (amount) => {
    // To change the async state, we need to use the function version of setState and not this version: setInput(input + amount);
    setInput((prevInput) => prevInput + amount);
  };

  return (
    <>
      <button
        onClick={() => {
          functionToChangeInput(-1);
        }}
      >
        -
      </button>
      <span>{input}</span>
      <button
        onClick={() => {
          functionToChangeInput(1);
        }}
      >
        +
      </button>
    </>
  );
}
