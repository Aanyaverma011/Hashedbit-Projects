import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter valid numbers");
      return;
    }

    let res;

    if (operator === "+") res = n1 + n2;
    else if (operator === "-") res = n1 - n2;
    else if (operator === "*") res = n1 * n2;
    else if (operator === "/")
      res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";

    setResult(res);
  };

  return (
    <div className="container">
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;