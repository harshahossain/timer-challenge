import React, { useState, useRef } from "react";

export default function Player() {
  //
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(evt) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(evt.target.value);
  // }

  function handleClick() {
    //useRef code komay now we dont need handlechange on every keystroke
    //useRef na use korle abar value={enteredPlayerName} ar onChange={handleChange} use korar lagto input e
    //setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
