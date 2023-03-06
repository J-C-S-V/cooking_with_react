import React from 'react';
import { Counter } from './Counter';
import { CounterFunction } from './CounterFunction';

function App() {
  return (
    <>
      <Counter initialCount={0} />
      <br />
      <CounterFunction />
    </>
  );
}

export default App;
