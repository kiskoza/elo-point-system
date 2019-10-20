use wasm_bindgen::prelude::*;

use crate::player::Player;

#[wasm_bindgen]
pub struct Scoreboard {
  players: Vec<Player>,
}

#[wasm_bindgen]
impl Scoreboard {
  pub fn new() -> Scoreboard {
    Scoreboard {
      players: Vec::new(),
    }
  }

  pub fn add_player(&mut self, name: String) {
    self.players.push(Player::new(&name, 400));
  }

  pub fn get_score(&self, name: String) -> i32 {
    self.players.iter().find(|&player| player.name() == &name).unwrap().score()
  }

  pub fn play(&mut self, winner_name: String, loser_name: String) {
    let winner = self.players.iter().find(|&player| player.name() == &winner_name).unwrap();
    let loser = self.players.iter().find(|&player| player.name() == &loser_name).unwrap();

    let r_a: i32 = winner.score().clone();
    let r_b: i32 = loser.score().clone();

    let q_a = (10 as f32).powf(r_a as f32 / 400.0 as f32);
    let q_b = (10 as f32).powf(r_b as f32 / 400.0 as f32);

    let e_a = q_a / (q_a + q_b);
    let e_b = q_b / (q_a + q_b);

    let k: f32 = 32.0;

    let r_a = (r_a as f32 + k * (1 as f32 - e_a)) as i32;
    let r_b = (r_b as f32 + k * (0 as f32 - e_b)) as i32;

    self.players.iter_mut().find(|player| player.name() == &winner_name).unwrap().set_score(r_a);
    self.players.iter_mut().find(|player| player.name() == &loser_name).unwrap().set_score(r_b);
  }
}
