import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const calculate = (symbol) => {
    if (symbol === "clear") {
      setResult("");
      setExpression("");
    } else if (symbol === "=") {
      try {
      const evalExpression = eval(expression);
      setResult(evalExpression);
      setExpression(evalExpression);
      } catch (error) {
        setExpression("Error");
      }
    } else {
      if (["+", "-", "/", "*"].includes(symbol)) {
        setExpression(expression + symbol);
      } else {
        setExpression(prev => prev + symbol);
      }
    }
    if(symbol === "%") {
      setExpression(expression / 100);
    }
  }

  return (
    <>
      <div id="container">
        <h1>JavaSript Calculator</h1>
        <div id="calculator">
          <div id="display">
            <p>{result}</p>
            <p>{expression}</p>
            </div>
          <button onClick={() => calculate("clear")}id="clear"className="light-gray">AC</button>
          <button onClick={() => calculate("+/-")}id="negative"className="light-gray">+/-</button>
          <button onClick={() => calculate("%")}id="percentage"className="light-gray">%</button>
          <button onClick={() => calculate("/")}id="divison"className="yellow">/</button>
          <button onClick={() => calculate("7")}id="seven"className="dark-gray">7</button>
          <button onClick={() => calculate("8")}id="eight"className="dark-gray">8</button>
          <button onClick={() => calculate("9")}id="nine"className="dark-gray">9</button>
          <button onClick={() => calculate("*")}id="multiply"className="yellow">*</button>
          <button onClick={() => calculate("4")}id="four"className="dark-gray">4</button>
          <button onClick={() => calculate("5")}id="five"className="dark-gray">5</button>
          <button onClick={() => calculate("6")}id="six"className="dark-gray">6</button>
          <button onClick={() => calculate("-")}id="subtract"className="yellow">-</button>
          <button onClick={() => calculate("1")}id="one"className="dark-gray">1</button>
          <button onClick={() => calculate("2")}id="two"className="dark-gray">2</button>
          <button onClick={() => calculate("3")}id="three"className="dark-gray">3</button>
          <button onClick={() => calculate("+")}id="add"className="yellow">+</button>
          <button onClick={() => calculate("0")}id="zero"className="dark-gray">0</button>
          <button onClick={() => calculate(".")}id="decimal"className="dark-gray">.</button>
          <button onClick={() => calculate("=")}id="equals"className="yellow">=</button>
        </div>
      </div>
    </>
  )
}

export default App
