
function Player(name, score) {
  this.playerName = name;
  this.score = 0;

  this.addToScore = function(tally) {
    this.score += tally;
  }
}

$(function(){

  var currentPlayer = new Player("Joe") // temporary default player

  $("#current-player-score").text(currentPlayer.score);

  var tally = 0;
  var dieRoll = 0;
  $("#roll-die").click(function(event) {
    dieRoll = Math.floor(Math.random()*(6)+1);
    if (dieRoll !== 1) {
      tally += dieRoll;
    } else {
      tally = 0;
    }

    $("#tally").text(tally);
    $("#dieRoll").text(dieRoll);

  });





  $("#hold").click(function(event) {
    event.preventDefault;
    currentPlayer.addToScore(tally);
    $("#current-player-score").text(currentPlayer.score);
    tally = 0;
    dieRoll = 0;
    $("#tally").text(tally);
    $("#dieRoll").text(dieRoll);


  });

});
