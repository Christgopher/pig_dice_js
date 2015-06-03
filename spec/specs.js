describe('Player', function() {

  it('creates a new player with name and score zero', function() {
    var testPlayer = new Player("jimbob");
    expect(testPlayer.playerName).to.equal("jimbob");
    expect(testPlayer.score).to.equal(0);
  });

  it('adds to a currently players score', function() {
    var testPlayer = new Player("Scuba Steve");
    testPlayer.addToScore(5);
    expect(testPlayer.score).to.equal(5);
  });

});





  // it("randomly returns an number from 1 to 6", function() {
  //   var testDieRoll = new DieRoll();
  //   expect(testDieRoll).to.equal(1 || 2 || 3 || 4 || 5 || 6);
  // });  ---- NO FUNCTION NEEDED. just used Math.random()
