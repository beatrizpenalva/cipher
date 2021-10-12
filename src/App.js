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
  const [messageLenght, setMessageLenght] = useState(0);
  const [copyBtnLabel, setCopyBtnLabel] = useState("copy");
  const [copyBtnState, setCopyBtnState] = useState(true);
  const [clearBtnState, setBtnState] = useState(true);

  useEffect(() => {
    setMessageLenght(message.length);
    if (offset || message) setBtnState(false);
    if (method && offset && message) {
      const finalMessage = encrypt(offset, message, method);
      setMessageEncrypted(finalMessage);
    }
  }, [method, offset, message]);

  useEffect(() => {
    if (!messageEncrypted) setCopyBtnState(true);
    else setCopyBtnState(false);
  }, [messageEncrypted]);

  const setOffState = (offsetNumber) => {
    setOffset(offsetNumber);
  };

  const setMessageState = (text) => {
    setMessage(text);
  };

  const setMethodState = (methodToApply) => {
    setMethod(methodToApply);
  };

  const clearOutput = () => {
    setMessage("");
    setMessageEncrypted("");
    setOffset("");
    setMessageLenght(0);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(messageEncrypted);
    changeBtnLabel();
  };

  const changeBtnLabel = () => {
    setCopyBtnLabel("copied");
    setTimeout(function () {
      setCopyBtnLabel("copy");
    }, 1000);
  };

  return (
    <div className="App">
      <InputNumber
        label={"Key"}
        placeholder={"1-999"}
        setOffState={setOffState}
        value={offset}
      />
      <Counter value={messageLenght} maxValue={2000} />
      <BoxMessage
        label={"Input"}
        placeholder={"Type your message here"}
        spellCheck={true}
        readOnly={false}
        value={message}
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
      <Button func={copyBtnLabel} action={copyOutput} disabled={copyBtnState} />
      <Button func={"clear"} action={clearOutput} disabled={clearBtnState} />
    </div>
  );
}

export default App;
