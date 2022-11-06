import { useState } from "react";
import "./App.css";

function App() {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");
  const numButtonsArr = [
    {
      id: "nine",
      key: "9",
      keyCode: "",
    },
    {
      id: "eight",
      key: "8",
      keyCode: "",
    },
    {
      id: "seven",
      key: "7",
      keyCode: "",
    },
    {
      id: "six",
      key: "6",
      keyCode: "",
    },
    {
      id: "five",
      key: "5",
      keyCode: "",
    },

    {
      id: "four",
      key: "4",
      keyCode: "",
    },

    {
      id: "three",
      key: "3",
      keyCode: "",
    },

    {
      id: "two",
      key: "2",
      keyCode: "",
    },

    {
      id: "one",
      key: "1",
      keyCode: "",
    },
    {
      id: "zero",
      key: "0",
      keyCode: "",
    },
    {
      id: "decimal",
      key: ".",
      keyCode: "",
    },
  ];

  const operatesArr = [
    {
      id: "add",
      key: "+",
      keyCode: "",
    },
    {
      id: "subtract",
      key: "-",
      keyCode: "",
    },
    {
      id: "multiply",
      key: "*",
      keyCode: "",
    },
    {
      id: "divide",
      key: "/",
      keyCode: "",
    },
  ];

  const handleClick = (value) => {
    setCalculate((prev) => prev + value);
    if (calculate[calculate.length - 1] == "=") {
      if (/[0-9.]/.test(value)) {
        setCalculate(value);
        console.log(calculate);
      } else {
        setCalculate(result + value);
      }
    }
    /* if (calculate === "0") {
      setCalculate(value);
    } else if (calculate === ".") {
      setCalculate(value);
    } else {
      setCalculate(calculate + value);
    } */
  };

  const handleResult = () => {
    setResult(eval(calculate));
    setCalculate((prev) => prev + "=");
  };

  const handleClear = () => {
    setCalculate("");
    setResult(0);
  };
  const handleDelete = () => {
    setCalculate(calculate.slice(0, -1));
    setResult(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row" id="display">
            <input id="display" value={calculate} placeholder="0" disabled />
            <div className="p-4">{result}</div>
          </div>
          <div className="row keys">
            {operatesArr.map((opButton) => (
              <div
                key={opButton.key}
                onClick={() => handleClick(opButton.key)}
                className="keypad col-3"
                id={opButton.id}
              >
                {opButton.key}
              </div>
            ))}
          </div>{" "}
          <div className="row">
            <div
              key="clear"
              className="keypad col-4"
              id="clear"
              onClick={handleClear}
            >
              Clear
            </div>{" "}
            <div
              key="del"
              className="col-4 keypad"
              id="del"
              onClick={handleDelete}
            >
              Del
            </div>
            <div
              key="equals"
              className="col-4 keypad"
              id="equals"
              onClick={handleResult}
            >
              =
            </div>
          </div>
          <div className="row keys">
            {numButtonsArr.map((numButton) => (
              <div
                key={numButton.key}
                className="keypad col-4"
                id={numButton.id}
                onClick={() => handleClick(numButton.key)}
              >
                {numButton.key}
              </div>
            ))}
          </div>{" "}
        </div>
      </header>
    </div>
  );
}

export default App;
