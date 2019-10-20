import React from "react";
import ReactDOM from "react-dom";
import Game from './components/Game.js';
import style from '../css/index.scss'

import("../pkg").then(module => {
  let scoreboard = module.Scoreboard.new();

  const wrapper = document.getElementById("app");
  wrapper ? ReactDOM.render(<Game scoreboard={scoreboard}/>, wrapper) : false;
});
