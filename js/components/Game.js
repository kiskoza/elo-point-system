import React, { Component } from "react";
import ReactDom from "react-dom";

import NewPlayer from "../components/NewPlayer";
import Play from "../components/Play";
import ScoreBoard from "../components/ScoreBoard";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
    }
  }

  onSaveName = (name) => {
    this.props.scoreboard.add_player(name);
    this.setState({
      players: [...this.state.players, {name: name, score: this.props.scoreboard.get_score(name)}]
    });
  }

  onPlay = (winner, loser) => {
    let scoreboard = this.props.scoreboard;

    scoreboard.play(winner, loser);
    this.setState({
      players: this.state.players.map((player) => {
        if(player.name == winner || player.name == loser) {
          return { name: player.name, score: scoreboard.get_score(player.name) };
        }

        return player;
      })
    });
  }

  render() {
    return (
      <div>
        <NewPlayer onSaveName={this.onSaveName} />
        <ScoreBoard players={this.state.players} />
        <Play players={this.state.players} onPlayClick={this.onPlay} />
      </div>
    )
  }
}

export default Game;
