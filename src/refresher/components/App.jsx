import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewCmp from "./NewCmp";
import ShowFilteredCitis from "./ShowFilteredCitis";

function App() {
  let arrCitys = ["jerusalem", "tlv", "rishun", "haifa", "biniamina"];
  const [testState, setTestState] = useState(true);
  const [textState, setTextState] = useState("");
  const f1 = () => {
    if (1 == 2) {
      return true;
    } else {
      return false;
    }
  };
  const handleBtnClick = (event) => {
    setTestState(!testState);
  };
  const handleTxtChange = (event) => {
    // console.log(event.target.value);
    setTextState(event.target.value);
  };
  return (
    <div className="App">
      <input type="text" onChange={handleTxtChange} value={textState} />
      <span>{textState}</span>
      <button onClick={handleBtnClick}>Change state</button>
      <h1>{testState + ""}</h1>
      <NewCmp name="kenny" lname="lname" />
      <ShowFilteredCitis
        citisArr={arrCitys.filter((city) => city.startsWith(textState))}
      />
    </div>
  );
}

export default App;
