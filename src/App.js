import React, { useState, useEffect } from "react";
import Button from "./atoms/Button";
import BoxMessage from "./atoms/BoxMessage";
import Counter from "./atoms/Counter";
import RadioButton from "./atoms/RadioButton";
import InputNumber from "./atoms/InputNumber";
import { encrypt } from "./utils/cipher";

function App() {
  const [message, setMessage] = useState("");
  const [messageEncrypted, setMessageEncrypted] = useState("");
  const [offset, setOffset] = useState();
  const [method, setMethod] = useState("");
  //const [caracteresNumber, setCaracteresNumber] = useState();

  useEffect(() => {
    if (method && offset && message) {
      const finalMessage = encrypt(offset, message, method);
      setMessageEncrypted(finalMessage);
    }
  }, [method, offset, message]);

  const setOffState = (offsetNumber) => {
    setOffset(offsetNumber);
  };

  const setMessageState = (text) => {
    setMessage(text);
  };

  const setMethodState = (methodToApply) => {
    setMethod(methodToApply);
  };

  return (
    <div className="App">
      <InputNumber
        label={"Key"}
        placeholder={"1-999"}
        setOffState={setOffState}
      />
      <Counter value={0} maxValue={2000} />
      <BoxMessage
        label={"Input"}
        placeholder={"Type your message here"}
        spellCheck={true}
        readOnly={false}
        action={setMessageState}
      />
      <RadioButton method={"decode"} action={setMethodState} />
      <RadioButton method={"encode"} action={setMethodState} />

      <BoxMessage
        label={"Output"}
        placeholder={"The message encrypted will appear here."}
        spellCheck={false}
        readOnly={true}
        value={messageEncrypted}
      />
      <Button action={"copy"} />
      <Button action={"clear"} />
    </div>
  );
}

export default App;
