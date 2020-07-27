import React from "react";

export default class RefsClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.input2Ref = React.createRef();
  }
  handleClick = () => {
    // console.log(input2Ref);
    // console.log(input2Ref.current.value);
    this.input2Ref.current.focus();
  };
  render() {
    return (
      <div className="d-flex flex-column maxWidth">
        <input type="text" />
        <input ref={this.input2Ref} type="text" />
        <input type="text" />
        <button onClick={this.handleClick}>☺</button>
      </div>
    );
  }
}
