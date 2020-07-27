import React, { useState } from "react";

import InputComp from "../components/InputComp";
import ListComp from "../components/ListComp";

function ListPage() {
  let [infoArrState, setInfoArrState] = useState([]);
  let [showInputCompState, setShowInputCompState] = useState(true);

  const handleTxtChange = (txt) => {
    let arr = [...infoArrState, txt];
    setInfoArrState(arr);
  };
  const handleDeleteItem = (idx) => {
    let arr = [...infoArrState];
    arr.splice(idx, 1);
    setInfoArrState(arr);
  };
  const handleDeleteInputComp = () => {
    setShowInputCompState(false);
  };
  return (
    <div className="container">
      <button className="btn btn-danger" onClick={handleDeleteInputComp}>
        x
      </button>
      {showInputCompState && <InputComp onTxtChange={handleTxtChange} />}
      <ListComp list={infoArrState} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default ListPage;
