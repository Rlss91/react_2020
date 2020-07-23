import React from "react";

const ShowFilteredCitis = (props) => {
  return (
    <div>
      {props.citisArr.map((city) => (
        <div key={city + Math.random()}>{city}</div>
      ))}
    </div>
  );
};

export default ShowFilteredCitis;
