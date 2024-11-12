import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Текст 1");
  const [memoCounter, setMemoCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const memoCounterText = useMemo(() => {
    console.log("Rendering memoCounterText");
    return memoCounter + 1;
  }, [memoCounter]);

  const handleTextChange = () => {
    setText(text === "Текст 1" ? "Текст 2" : "Текст 1");
  };

  return (
    <div>
      <h1>Лічильник: {counter}</h1>
      <h2>memoCounter: {memoCounterText}</h2>
      <button onClick={handleClick}>Лічильник++</button>
      <button onClick={() => setMemoCounter((prev) => prev + 1)}>
        memoCounter++
      </button>
      <button onClick={handleTextChange}>Змінити текст</button>
      <Child onClick={handleClick} text={text} />
    </div>
  );
};

export default Parent;
