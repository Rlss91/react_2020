import React, { useRef } from "react";
import "./RefsPage.css";

function RefsPage() {
  const input2Ref = useRef();
  const handleClick = () => {
    console.log(input2Ref);
    console.log(input2Ref.current.value);
    input2Ref.current.focus();
  };
  return (
    <div className="d-flex flex-column maxWidth">
      <input type="text" />
      <input ref={input2Ref} type="text" />
      <input type="text" />
      <button onClick={handleClick}>☺</button>
    </div>
  );
}

export default RefsPage;
