import React from "react";

function ListComp(props) {
  return (
    <div>
      {props.list.map((item, idx) => {
        return (
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
            key={item + Math.random()}
          >
            <strong>{item}</strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                props.onDeleteItem(idx);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListComp;
