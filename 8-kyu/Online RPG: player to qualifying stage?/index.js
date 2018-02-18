/*
  Title:
    Online RPG: player to qualifying stage?

  Description:
    Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

    Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

    Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

    In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

    Otherwise return, False/false (according to the language n use).

  Kata Link:
    https://www.codewars.com/kata/online-rpg-player-to-qualifying-stage

  Discuss Link:
    https://www.codewars.com/kata/online-rpg-player-to-qualifying-stage/discuss

  Solutions Link:
    https://www.codewars.com/kata/online-rpg-player-to-qualifying-stage/solutions
*/

// Long Solution
const playerRankUp = points =>
  points >= 100
    ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
    : false

// Function Export
module.exports = playerRankUp
