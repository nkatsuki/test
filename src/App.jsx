import React, { useState, useCallback, useMemo } from "react";
import { ChaildArea } from "./ChaildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState(0);
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChaildArea open={open} onClickClose={onClickClose}></ChaildArea>
    </div>
  );
}
