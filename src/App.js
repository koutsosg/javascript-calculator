import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [calculate, setCalculate] = useState("0");
  const [result, setResult] = useState("");
  const [data, setData] = useState("");
  const calcButtons = [
    {
      id: "clear",
      key: "Clear",
    },
    {
      id: "divide",
      key: "/",
    },
    {
      id: "add",
      key: "+",
    },
    {
      id: "subtract",
      key: "-",
    },
    {
      id: "multiply",
      key: "*",
    },
    {
      id: "equals",
      key: "=",
    },
    {
      id: "seven",
      key: 7,
    },
    {
      id: "eight",
      key: 8,
    },
    {
      id: "nine",
      key: 9,
    },

    {
      id: "four",
      key: 4,
    },
    {
      id: "five",
      key: 5,
    },
    {
      id: "six",
      key: 6,
    },

    {
      id: "one",
      key: 1,
    },
    {
      id: "two",
      key: 2,
    },
    {
      id: "three",
      key: 3,
    },

    {
      id: "zero",
      key: 0,
    },
    {
      id: "decimal",
      key: ".",
    },
  ];
  const operators = ["Clear", "/", "*", "+", "-", "="];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleEqual = () => {
    const equal = eval(data);
    setCalculate(equal);
    setResult(`${equal} = ${equal}`);
    setData(`${equal}`);
  };

  const handleClear = () => {
    setCalculate("0");
    setData("");
  };

  const handleNum = (value) => {
    if (!data.length) {
      setCalculate(`${value}`);
      setData(`${value}`);
    } else {
      if (value === 0 && (data === "0" || calculate === "0")) {
        setData(`${data}`);
      } else {
        const lastCh = data.charAt(data.length - 1);
        const isLastChOp =  operators.includes(lastCh);

        setCalculate(isLastChOp ? `${value}` : `${calculate}${value}`);
        setData(`${data}${value}`);
      }
    }
  };

  const handleDot = () => {
    const lastCh = data.charAt(data.length - 1);
    if (!data.length) {
      setCalculate("0.");
      setData("0.");
    } else {
      if ( operators.includes(lastCh)) {
        setCalculate("0.");
        setData(`${data} 0.`);
      } else {
        setCalculate(
          lastCh === "." || calculate.includes(".")
            ? `${calculate}`
            : `${calculate}.`
        );
        const valueFormat =
          lastCh === "." || calculate.includes(".") ? `${data}` : `${data}.`;
        setData(valueFormat);
      }
    }
  };

  const handleOp = (value) => {
    if (data.length) {
      setCalculate(`${value}`);
      const beforeLastCh = data.charAt(data.length - 2);
      const beforeLastChIsOp =
        operators.includes(beforeLastCh) ; //?>>?
      const lastCh = data.charAt(data.length - 1);
      const lastChIsOP = operators.includes(lastCh) ;
     
      if ((lastChIsOP && value !== "-") || (beforeLastChIsOp && lastChIsOP)) {
        if (beforeLastChIsOp) {
          const newValue = `${data.substring(0, data.length - 2)}${value}`;
          setData(newValue);
        } else {
          setData(`${data.substring(0, data.length - 1)}${value}`);
        }
      } else {
        setData(`${data}${value}`);
      }
    }
  };

  const handleClick = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);
    switch (value) {
      case "=":
        handleEqual();
        break;
      case "Clear":
        handleClear();
        break;
      case number:
        handleNum(value);
        break;
      case ".":
        handleDot(value);
        break;
      case operator:
        handleOp(value);
        break;
      default:
        break;
    }
  };
  const handleResult = () => {
    setResult(data);
  };
  useEffect(() => {
    handleResult();
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row display">
            <span>{result}</span>
            <hr/>
            <span id="display">{calculate}</span>
          </div>
          <div className="row keys">
            {calcButtons.map((calcButton) => (
              <div
                key={calcButton.id}
                className="keypad col-4 w-5"
                id={calcButton.id}
                onClick={() => handleClick(calcButton.key)}
              >
                {calcButton.key}
              </div>
            ))}
          </div>{" "}
        </div>
      </header>
    </div>
  );
};

export default App;
