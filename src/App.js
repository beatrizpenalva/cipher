import React from "react";
import Button from "./atoms/Button";
import BoxMessage from "./atoms/BoxMessage";

function App() {
  return (
    <div className="App">
      <p>Oi</p>
      <BoxMessage label={"Input"} placeholder={"Type your message here"} />
      <BoxMessage label={"Output"} placeholder={"Message encrypted"} />
      <Button action={"copy"} />
      <Button action={"clear"} />
    </div>
  );
}

export default App;
