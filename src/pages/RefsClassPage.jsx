import React from "react";

export default class RefsClassPage extends React.Component {
  state = {
    a1: "",
    a2: "",
  };

  constructor(props) {
    super(props);
    this.input2Ref = React.createRef();
  }
  handleClick = () => {
    // console.log(input2Ref);
    // console.log(input2Ref.current.value);
    let tempstate = { ...this.state };
    tempstate.a1 = "asgaerwg";
    this.setState(tempstate);
    this.input2Ref.current.focus();
  };
  render() {
    return (
      <div className="d-flex flex-column maxWidth">
        {this.state.a1}
        <input type="text" />
        <input ref={this.input2Ref} type="text" />
        <input type="text" />
        <button onClick={this.handleClick}>☺</button>
      </div>
    );
  }
}
