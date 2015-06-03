
function Player(name, score) {
  this.playerName = name;
  this.score = 0;

  this.addToScore = function(tally) {
    this.score += tally;
  }
}

$(function(){
  var tally = 0;
  var dieRoll = 0;
  $("#roll-die").click(function(event) {
    event.preventDefault();
    dieRoll = Math.floor(Math.random()*(6)+1);
    if (dieRoll !== 1) {
      tally += dieRoll;
    } else {
      tally = 0;
    }
    // debugger;
    $("#tally").text(tally);
    $("#dieRoll").text(dieRoll);

  });





  $("form#current-tally").submit(function(event) {
    event.preventDefault();

  });

});
