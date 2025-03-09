import React from "react";

const SumComponent = ({ num1, num2 }) => {
  return (
    <div>
      <h2>Sum of {num1} and {num2} is: {num1 + num2}</h2>
    </div>
  );
};

export default SumComponent;
