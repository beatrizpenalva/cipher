import React from "react";
import Button from "./atoms/Button";
import BoxMessage from "./atoms/BoxMessage";

function App() {
  return (
    <div className="App">
      <BoxMessage
        label={"Input"}
        placeholder={"Type your message here"}
        spellCheck={true}
        readOnly={false}
      />
      <BoxMessage
        label={"Output"}
        placeholder={"Message encrypted"}
        spellCheck={false}
        readOnly={true}
      />
      <Button action={"copy"} />
      <Button action={"clear"} />
    </div>
  );
}

export default App;
