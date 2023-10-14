import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const onChange = (event) => {
    setKeyWord(event.target.value);
  }

  const onClick = () => setCounter((prev) => prev + 1);

  // const onlyOne=()=>console.log("onlyOne");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  
  useEffect(() => {
    if (keyWord !== "" && keyWord.length >= 3) {
      console.log("I run when KeyWord Changes")
      console.log("Search For", keyWord);
    }
  }, [keyWord]);

  useEffect(() => {
    if (counter !== 0) {
      console.log("I run when Counter Changes")
      console.log("Counter is ", counter);
    }
  }, [counter]);

  useEffect(() => {
    console.log("I run when Counter,keyWord Changes")
  }, [keyWord, counter]);
  
  return (
    <div>
      <input type="text"
        placeholder="Search Heere"
        onChange={onChange}
        value={keyWord}
      />
      <h1 className={styles.title}>Hello</h1>
      <button onClick={onClick}>Click Counter {counter}</button>
      <Button text="test" />
    </div>
  );
}

export default App;
