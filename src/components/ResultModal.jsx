import { forwardRef } from "react";
//for this forward ref (see more in TimeChallenge comp for info)
//for this to use I have to wrap it around the whole component

//after  wraping we dont need to destructr the ref anymore but it will recieve a second arg after the props arg
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  //when we set the form method to dialog and add a button at the end of it by default it closes the page.. this is vanilla
  //we need to add the open prop otherwise it doesnt come live because by default the visibility is false and open trues it???

  //for the backdrop we need to open the dialog programmatically and thats again where ref will help us
  //for that we need to control the Ref on the TimerChallenge.jsx

  //now here im using special ref prop. back in TimeChallenge i was just passing it as prop so the name wasnt important
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
