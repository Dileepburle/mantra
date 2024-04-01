import React from "react";
import './App.css';
function App() {
  let time = new Date().getHours();
  return (
    <div>
      <div className="app">
      <h1>Wishes</h1>
      {time < 12 ? (
        <h1> Good Morning</h1>
      ) : time < 20 && time > 12 ? (
        <h1> Thinnava </h1>
      ) : (
        <h1> Good Night</h1>
      )}
    </div>
    </div>
  );
}
export default App;
