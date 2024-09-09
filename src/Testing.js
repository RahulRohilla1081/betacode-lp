import React, { useEffect, useState } from "react";

function Testing() {
  const [timerValue, setTimerValue] = useState(0);

  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setTimer(true);
  };
  const stopTimer = () => {
    setTimer(false);
    setTimerValue(0);
  };
  const resetTimer = () => {
    stopTimer();
    setTimerValue(0);
  };

  const TimePlus = () => {
    //  TimePlus();
  };
  useEffect(() => {
    console.log("ASdasjdhjas", timer);
    if (timer) {
      setInterval(() => {
        setTimerValue((prev) => prev + 1);
      }, 1000);
    }
    if (timer == null) {
      setTimerValue(0);
    }
  }, [timer]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1> Timer Value:- {timerValue}</h1>
      <button
        className="btn"
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </button>
      <button
        className="btn"
        onClick={() => {
          stopTimer();
        }}
      >
        {" "}
        Stop
      </button>
      <button
        className="btn"
        onClick={() => {
          resetTimer();
        }}
      >
        {" "}
        Reset
      </button>
    </div>
  );
}

export default Testing;
