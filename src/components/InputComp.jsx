import React, { useState, useEffect } from "react";

let interval;

function InputComp(props) {
  let [txtState, setTxtState] = useState("");

  useEffect(() => {
    interval = setInterval(() => {
      console.log("interval happend");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleTxtChange = (e) => {
    setTxtState(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className="form-control"
        onChange={handleTxtChange}
        value={txtState}
      />
      {txtState}
      <button
        className="btn btn-primary"
        onClick={() => {
          props.onTxtChange(txtState);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputComp;
