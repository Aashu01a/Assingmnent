import React from "react";
import SumComponent from "./SumComponent"; 

function App() {
  return (
    <div>
      <SumComponent num1={5} num2={10} />
      <SumComponent num1={20} num2={30} />
    </div>
  );
}

export default App;
