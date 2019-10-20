import React, { Component } from "react";
import ReactDom from "react-dom";

class NewPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      onSaveName: props.onSaveName,
    }
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  saveName = (event) => {
    this.state.onSaveName(this.state.name);

    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <input placeholder="Gizike" value={this.state.name} onChange={this.changeName} />
        <input type="button" value="Hozzáad" onClick={this.saveName} />
      </div>
    )
  }
}

export default NewPlayer;
