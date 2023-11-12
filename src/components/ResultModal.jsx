export default function ResultModal({ result, targetTime }) {
  //when we set the form method to dialog and add a button at the end of it by default it closes the page.. this is vanilla
  //we need to add the open prop otherwise it doesnt come live because by default the visibility is false and open trues it???
  //for the backdrop we need to open the dialog programmatically and thats again where ref will help us
  return (
    <dialog className="result-modal" open>
      <h2>You {result}!</h2>
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
}
