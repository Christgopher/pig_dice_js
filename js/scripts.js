
function Player(name, score) {
  this.playerName = name;
  this.score = 0;

  this.addToScore = function(tally) {
    this.score += tally;
  }
}

function timedDice(dieRoll, lastDieRoll) {
  $("#roll-die").addClass("rollOut");
  setTimeout(function() {changeDie(dieRoll, lastDieRoll)},1000);
}

function changeDie(dieRoll, lastDieRoll) {
  $("#roll-die").removeClass("rollOut")
  $("#roll-die").removeClass("red_die" + lastDieRoll);
  $("#roll-die").addClass("rollIn red_die" + (dieRoll).toString());
  setTimeout(function(){$("#roll-die").removeClass("rollIn")}, 1000);
}

function holdDie(dieRoll) {
  $("#roll-die").addClass("rotateOut");
  setTimeout(function(){$("#roll-die").removeClass("rotateOut red_die" + dieRoll.toString())}, 1000);
  $("#roll-die").addClass("red_die0 rotateIn");
  setTimeout(function(){$("#roll-die").removeClass("rotateIn")}, 2000);
}

$(function(){
  var players = [];
  var playerIndex = 0;
  var currentPlayer = NaN;

  // CREATE INPUTS BASED ON SELECT DROP DOWN CHOICE
  $('#submit-player-select').click(function(event){
    event.preventDefault();
    var choice = document.getElementById("number-players");
    var number = parseInt(choice.options[choice.selectedIndex].value);
    for (var i = 0; i < number; i++){
      $('#player-names').append('<div class="new-player">'+
      '<input type="text" class="player-name" placeholder="Player Name"/><br><br>');
    }
    $("#player-select").hide();
    $("#add-players").show();
  });

  // CREATE NEW PLAYERS WITH THE INPUT NAMES
  $("form#add-players").submit(function(event){
    event.preventDefault();
    $(".new-player").each(function() {
      var inputName = $(this).find("input.player-name").val();
      var newPlayer = new Player(inputName);
      players.push(newPlayer);
    });
    $("#add-players").hide();
    $("#play-game").show();
    currentPlayer = players[playerIndex];
    $(".current-player-name").text(currentPlayer.playerName);
    $(".current-player-score").text(currentPlayer.score);

  });


  // GET RANDOM D6 ROLL RESULT. IF 1 IS ROLLED GO TO NEXT PLAYER
  var tally = 0;
  var dieRoll = 0;
  var lastDieRoll = 0;
  $("#roll-die").click(function(event) {
    lastDieRoll = dieRoll;
    dieRoll = Math.floor(Math.random()*(6)+1);
    timedDice(dieRoll, lastDieRoll);
    if (dieRoll !== 1) {
      tally += dieRoll;
    } else {
      tally = 0;
      playerIndex++;
      if (playerIndex === players.length){
        playerIndex = 0;
      }
      currentPlayer = players[playerIndex];
      $(".current-player-name").text(currentPlayer.playerName);
      $(".current-player-score").text(currentPlayer.score);

    }

    $("#tally").text(tally);
    $("#dieRoll").text(dieRoll);
  });


  // SAVE CURRENT SCORE AND GO TO NEXT PLAYER
  $("#hold").click(function(event) {
    event.preventDefault;
    holdDie(dieRoll);
    currentPlayer.addToScore(tally);
    $(".current-player-score").text(currentPlayer.score);
    tally = 0;
    dieRoll = 0;
    playerIndex++;
    if (playerIndex === players.length){
      playerIndex = 0;
    }
    currentPlayer = players[playerIndex];
    $(".current-player-name").text(currentPlayer.playerName);
    $(".current-player-score").text(currentPlayer.score);
    $("#tally").text(tally);
    $("#dieRoll").text(dieRoll);
  });

});
