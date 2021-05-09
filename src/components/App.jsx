import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);
  const [currentTime, update] = useState("TIME");

  function setTime() {
    update(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
