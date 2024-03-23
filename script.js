const debug = true;
//deck
const deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suit = ["Heart", "Diamond", "Club", "Spade"];
const face = ["Jack", "Queen", "King", "Ace"];
const suitSize = {
  hearts: 13,
  diamonds: 13,
  clubs: 13,
  spades: 13,
};
const stats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

let continueFlag = true;

function playgame() {
  while (continueFlag) {
    //user draw card
    let userDrawCard = deck[Math.floor(deck.length * Math.random())];
    let userDrawSuit = suit[Math.floor(suit.length * Math.random())];
    let askDraw = alert("Draw a Card?");
    let showCard = alert(userDrawCard + userDrawSuit);
    //console test
    if (debug === true) {
      console.log(userDrawCard + userDrawSuit);
    }

    // cpu draw card
    let cpuDrawCard = deck[Math.floor(deck.length * Math.random())];
    let cpuDrawSuit = suit[Math.floor(suit.length * Math.random())];
    let cpuCard = alert(cpuDrawCard + cpuDrawSuit);
    //console test
    if (debug === true) {
      console.log(cpuDrawCard + cpuDrawSuit);
    }
    // win condition
    if (userDrawCard > cpuDrawCard) {
      alert("You Win!");
      console.log("You Win");
      stats.wins = stats.wins + 1;
      // lose condition
    } else if (userDrawCard < cpuDrawCard) {
      alert("You Lose");
      console.log("You Lose");
      stats.losses = stats.losses + 1;
      // suit win condition
    } else if (
      (userDrawSuit === "Heart" && cpuDrawSuit === "Diamond") ||
      (userDrawSuit === "Heart" && cpuDrawSuit === "Club") ||
      (userDrawSuit === "Heart" && cpuDrawSuit === "Spade") ||
      (userDrawSuit === "Diamond" && cpuDrawSuit === "Club") ||
      (userDrawSuit === "Diamond" && cpuDrawSuit === "Spade") ||
      (userDrawSuit === "Club" && cpuDrawSuit === "Spade")
    ) {
      alert("You Win!");
      console.log("You Win");
      stats.wins = stats.wins + 1;
      // suit lose condition
    } else if (
      (userDrawSuit === "Diamond" && cpuDrawSuit === "Heart") ||
      (userDrawSuit === "Club" && cpuDrawSuit === "Heart") ||
      (userDrawSuit === "Club" && cpuDrawSuit === "Diamond") ||
      (userDrawSuit === "Spade" && cpuDrawSuit === "Heart") ||
      (userDrawSuit === "Spade" && cpuDrawSuit === "Diamond") ||
      (userDrawSuit === "Spade" && cpuDrawSuit == "Club")
    ) {
      alert("You Lose");
      console.log("You Lose");
      stats.losses = stats.losses + 1;
      // tie condition
    } else {
      window.alert("You Tie");
      console.log("You Tie");
      stats.ties = stats.ties + 1;
    }
    continueFlag = confirm("Continue?");
  }
}

playgame();
alert(`Wins ${stats.wins}\nLosses ${stats.losses}\nTies ${stats.ties}\n`);
