import React from "react";
import "./RefsPage.css";

function ParamsPage(props) {
  console.log(props);
  return (
    <div className="d-flex flex-column maxWidth">{props.match.params.id}</div>
  );
}

export default ParamsPage;
