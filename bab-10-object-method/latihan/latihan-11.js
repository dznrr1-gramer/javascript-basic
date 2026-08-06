const game = {
  pemain: "player1",
  nyawa: 100,
  terkenaSerangan: function (damage) {
    this.nyawa -= damage;
  }
};

console.log("Nyawa awal: " + game.nyawa);
game.terkenaSerangan(99);
console.log("Nyawa sekarang: " + game.nyawa);