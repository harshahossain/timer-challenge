import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";
//let timer;
export default function TimerChallenge({ title, targetTime }) {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    //setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  //let timer; state changes make this component re-execute so the timer is taken new.. We need to use Ref instead

  // function handleStart() {
  //   timer.current = setTimeout(() => {
  //     setTimerExpired(true);
  //     dialog.current.open(); //showModal() is built in native html. we could use use show()
  //   }, targetTime * 1000);   //we are calling showModal() inside ResultModal now
  //   setTimerStarted(true);
  // }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevState) => prevState - 10);
    }, 10);
    //setTimerStarted(true);
  }

  function handleStop() {
    //clearTimeout(timer.current);
    //setTimerStarted(false);
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      {/* the name is upto me(cause im passing it as prop not as special obj ref?) but for easier understanding im setting it to ref in resultmodal . however its important to set the prop to the useRef obj*/}
      {/* howevber this shows a  problem that ref cant be prop so we  gotta import forwardRef from react in the comp that im passing the ref */}
      {/* ++in ResultModal */}
      {/* but now after changes in resultModal it should also be called ref so react recongnizes  it */}
      {/* and we finally get the backdrop */}
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerIsActive && <p>You Lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop " : "Start "}Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
