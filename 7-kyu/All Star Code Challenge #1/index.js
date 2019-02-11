/*
  Title:
    All Star Code Challenge #1

  Description:
    This Kata is intended as a small challenge for my students
    All Star Code Challenge #1

    Write a function, called sumPPG, that takes two NBA player objects and sums their PPG

  Examples:
    function NBAplayer(name, team, ppg){
      this.name=name;
      this.team=team;
      this.ppg=ppg;
    }

    var iverson = new NBAplayer("Iverson", "76ers", 11.2);
    var jordan = new NBAplaer("Jordan", "bulls", 20.2);
    sumPPG(iverson, jordan); // => 31.4

  Kata Link:
    https://www.codewars.com/kata/all-star-code-challenge-number-1

  Discuss Link:
    https://www.codewars.com/kata/all-star-code-challenge-number-1/discuss

  Solutions Link:
    https://www.codewars.com/kata/all-star-code-challenge-number-1/solutions
*/

// Initial data
class NBAplayer {
  constructor(name, team, ppg) {
    this.name = name
    this.team = team
    this.ppg = ppg
  }
}

// Long Solution
/*
const sumPPG = (playerOne, playerTwo) => playerOne.ppg + playerTwo.ppg
*/

// Short Solution
const sumPPG = ({ ppg: ppgOne }, { ppg: ppgTwo }) => ppgOne + ppgTwo

// Function Export
module.exports = { NBAplayer, sumPPG }
