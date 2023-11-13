import { forwardRef, useImperativeHandle, useRef } from "react";
//for this forward ref (see more in TimeChallenge comp for info)
//for this to use I have to wrap it around the whole component
import { createPortal } from "react-dom";

//after  wraping we dont need to destructr the ref anymore but it will recieve a second arg after the props arg
const ResultModal = forwardRef(function ResultModal(
  { onReset, targetTime, remainingTime },
  ref
) {
  const dialog = useRef(); //cause now  we need a separate ref reaching out to the dialog because we wanna deatch it for more usability
  //when we set the form method to dialog and add a button at the end of it by default it closes the page.. this is vanilla
  //we need to add the open prop otherwise it doesnt come live because by default the visibility is false and open trues it???

  //for the backdrop we need to open the dialog programmatically and thats again where ref will help us
  //for that we need to control the Ref on the TimerChallenge.jsx

  //now here im using special ref prop. back in TimeChallenge i was just passing it as prop so the name wasnt important

  //useImperativeHandle hook just makes it impartive so we can changle the dialog to div and it will still work
  //we cann call this hook inside comp fn to define properties and method that should be accessible on this component here from outside this component. i.e. dialog current showmodal from timerchallenge
  //it uses 2 args and first one is always the ref which we got from forward ref
  //and the 2nd value is a function  that groups all the properties and methods that should be exposed by this component to other component

  useImperativeHandle(ref, () => {
    return {
      open() {
        //the names upto me
        dialog.current.showModal();
      },
    };
  });
  //so when open() which i named is called, the showModal () on this dialog

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog onClose={onReset} ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
