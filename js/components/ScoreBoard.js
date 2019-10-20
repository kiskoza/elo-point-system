import React, { Component } from "react";
import ReactDom from "react-dom";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.players.map((player, index)=>{
            return <li key={player.name}>{player.name} - {player.score}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default ScoreBoard;
