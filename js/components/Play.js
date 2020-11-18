import React, { Component } from "react";
import ReactDom from "react-dom";

class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: '',
      loser: '',
    }
  }

  onChangeLoser = (event) => {
    this.setState({
      loser: event.target.options[event.target.selectedIndex].value
    })
  }

  onChangeWinner = (event) => {
    this.setState({
      winner: event.target.options[event.target.selectedIndex].value
    })
  }

  onPlayClick = () => {
    this.props.onPlayClick(this.state.winner, this.state.loser);
  }

  isValidMatch = () => {
    if(this.state.winner === this.state.loser || this.state.winner === '' || this.state.loser === '') {
      return 'disabled';
    }

    return '';
  }

  render() {
    if(this.props.players.length < 2) {
       return null;
    }

    return (
      <div class="match">
        <label>
          Winner:
          <select onChange={this.onChangeWinner} selected={this.state.winner}>
            <option key='__empty' value=''>Select a winner</option>
            {this.props.players.map((player, index)=>{
              return <option key={player.name} value={player.name}>{player.name}</option>;
            })}
          </select>
        </label>
        <label>
          Loser:
          <select onChange={this.onChangeLoser} selected={this.state.loser}>
            <option key='__empty' value=''>Select a loser</option>
            {this.props.players.map((player, index)=>{
              return <option key={player.name} value={player.name}>{player.name}</option>;
            })}
          </select>
        </label>
        <input type="submit" value="Play!" onClick={this.onPlayClick} disabled={this.isValidMatch()} />
      </div>
    )
  }
}

export default Play;
