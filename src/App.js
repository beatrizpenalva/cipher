import React from "react";
import Button from "./atoms/Button";

function App() {
  return (
    <div className="App">
      <p>Oi</p>
      <Button action={"copy"} />
      <Button action={"clear"} />
    </div>
  );
}

export default App;
