import React from "react";
import Button from "./atoms/Button";
import BoxMessage from "./atoms/BoxMessage";
import Counter from "./atoms/Counter";
import RadioButton from "./atoms/RadioButton";
import TextField from "./atoms/TextField";

function App() {
  return (
    <div className="App">
      <TextField label={"Key"} placeholder={"1-999"} />
      <Counter value={0} maxValue={2000} />
      <BoxMessage
        label={"Input"}
        placeholder={"Type your message here"}
        spellCheck={true}
        readOnly={false}
      />
      <RadioButton method={"decode"} />
      <RadioButton method={"encode"} />

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
