pub struct Player {
  name: String,
  score: i32,
}

impl Player {
  pub fn new(name: &String, score: i32) -> Player {
    Player {
      name: name.clone(),
      score,
    }
  }

  pub fn name(&self) -> &String {
    &self.name
  }

  pub fn score(&self) -> i32 {
    self.score
  }

  pub fn set_score(&mut self, new_score: i32) {
    self.score = new_score;
  }
}
