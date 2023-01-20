import React from "react";
import "./styles.css";
import { useState } from "react";

export default function Calculator() {
  const [numInput, numInputSetter] = useState("");
  const [outPutScreen, outPutScreenSetter] = useState("");
  const [shown, shownSetter] = useState(false);
  function acHandler() {
    numInputSetter("");
    outPutScreenSetter("");
  }
  function numHandler(event) {
    if (!shown) {
      numInputSetter(numInput + event.target.value);
      outPutScreenSetter(outPutScreen + event.target.value);
    } else if (shown) {
      numInputSetter(event.target.value);
      outPutScreenSetter(event.target.value);
      shownSetter(false);
    }
  }
  function operatorHandler(event) {
    numInputSetter(numInput + event.target.value);
    outPutScreenSetter("");
  }
  function equalHandler() {
    try {
      outPutScreenSetter(eval(numInput));
      shownSetter(true);
    } catch (e) {
      outPutScreenSetter("error");
    }
  }

  return (
    <div className="body">
      <div className="calculator">
        <div className="formulaScreen">{numInput}</div>
        <div className="outPutScreen" id="display">
          {outPutScreen}
        </div>
        <div className="buttonsArea">
          <button id="clear" value="AC" className="jumbo" onClick={acHandler}>
            AC
          </button>
          <button
            id="divide"
            value="/"
            className="diffBG"
            onClick={operatorHandler}
          >
            /
          </button>
          <button
            id="multiply"
            value="*"
            className="diffBG"
            onClick={operatorHandler}
          >
            x
          </button>
          <button id="seven" value="7" onClick={numHandler}>
            7
          </button>
          <button id="eight" value="8" onClick={numHandler}>
            8
          </button>
          <button id="nine" value="9" onClick={numHandler}>
            9
          </button>
          <button
            id="substract"
            value="-"
            className="diffBG"
            onClick={operatorHandler}
          >
            -
          </button>
          <button id="four" value="4" onClick={numHandler}>
            4
          </button>
          <button id="five" value="5" onClick={numHandler}>
            5
          </button>
          <button id="six" value="6" onClick={numHandler}>
            6
          </button>
          <button
            id="add"
            value="+"
            className="diffBG"
            onClick={operatorHandler}
          >
            +
          </button>
          <button id="one" value="1" onClick={numHandler}>
            1
          </button>
          <button id="two" value="2" onClick={numHandler}>
            2
          </button>
          <button id="three" value="3" onClick={numHandler}>
            3
          </button>
          <button id="zero" value="0" className="jumbo" onClick={numHandler}>
            0
          </button>
          <button id="decimal" value="." onClick={numHandler}>
            .
          </button>
          <button id="equals" value="=" onClick={equalHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
