import React from "react";

const NewCmp = (props) => {
  return (
    <div>
      <h1>your name is {props.name}</h1>
      <h2>your lname is {props.lname}</h2>
    </div>
  );
};

export default NewCmp;
